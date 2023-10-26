const express = require('express');
const { MongoClient } = require('mongodb');
const axios = require('axios');
const debug = require('debug')('app:server');
const moment = require('moment');
const Chart = require('chart.js'); // Import Chart.js library
const ml = require('ml-regression');
const SimpleLinearRegression = ml.SimpleLinearRegression;


const app = express();
const port = 80;
const connectionURL =
  'mongodb+srv://mifd413:k72CBvWHm4TvN3h8@calldata.vbgrvc3.mongodb.net/CallData?retryWrites=true&w=majority';
const databaseName = 'CallData';
const collectionName = 'MIFDCalls';

let db;
let collection;

// Connect to MongoDB
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    db = client.db(databaseName);
    collection = db.collection(collectionName);
    console.log('Connected to MongoDB');
    // Make initial POST request to retrieve all 911 calls
    axios
      .post('http://104.167.248.66:8866/dispcall.json.php', 'persid=539&fdid=52068')
      .then(async (response) => {
        const dispcall = response.data.dispcall;
        const incnums = dispcall.map(call => call.call_id);

        // Find calls that do not exist in the database
        const existingCallsPromise = collection.find({ call_id: { $in: incnums } }).toArray();
        const newCalls = dispcall.filter(call => !incnums.includes(call.call_id));

        existingCallsPromise
          .then(existingCalls => {
            // Filter out any calls that already exist in the database
            const filteredCalls = newCalls.filter(call => {
              const existingincnums = existingCalls.map(call => call.incnum.toString());
              return !existingincnums.includes(call.incnum.toString());
            });
            if (filteredCalls.length > 0) {
              const insertPromises = filteredCalls.map(call => collection.insertOne(call));

              Promise.all(insertPromises)
                .then((results) => {
                  const insertedCount = results.length;
                  console.log(`Inserted ${insertedCount} new calls into the database`);
                  handleNewCall();
                })
                .catch((error) => {
                  console.error('Error inserting new calls:', error);
                });
            } else {
              console.log('No new calls found');
            }
          })
          .catch((error) => {
            console.error('Error retrieving existing calls:', error);
          });
      })
      .catch((error) => {
        console.error('Error retrieving new calls:', error);
      });

    setInterval(() => {
      axios
        .post('http://104.167.248.66:8866/dispcall.json.php', 'persid=539&fdid=52068')
        .then((response) => {
          // Check the structure of the response
          console.log(response.data);
          const newCalls = response.data.dispcall;

          if (!Array.isArray(newCalls)) {
            console.error('Received response without dispcall array');
            return;
          }

          // Save only the new calls to the database
          collection.find().toArray()
            .then((existingCalls) => {
              if (existingCalls && existingCalls.length > 0) {
                console.log(newCalls); // Verify the structure and content of the newCalls array

                const existingincnums = existingCalls.map(call => call.incnum.toString());
                const filteredCalls = newCalls.filter(newCall => !existingincnums.includes(newCall.incnum.toString()));

                if (filteredCalls.length > 0) {
                  const insertPromises = filteredCalls.map(newCall => collection.insertOne(newCall));

                  Promise.all(insertPromises)
                    .then((results) => {
                      const insertedCount = results.length;
                      console.log(`Inserted ${insertedCount} new calls into the database`);
                    })
                    .catch((error) => {
                      console.error('Error inserting new calls:', error);
                    });
                } else {
                  console.log('No new calls found');
                }
              } else {
                // The collection is empty, so insert all new calls without filtering
                const insertPromises = newCalls.map(newCall => collection.insertOne(newCall));

                Promise.all(insertPromises)
                  .then((results) => {
                    const insertedCount = results.length;
                    console.log(`Inserted ${insertedCount} new calls into the database`);
                  })
                  .catch((error) => {
                    console.error('Error inserting new calls:', error);
                  });
              }
            })
            .catch((error) => {
              console.error('Error retrieving existing calls:', error);
            });
        })
        .catch((error) => {
          console.error('Error retrieving new calls:', error);
        });
    }, 30000);

    // Function to fetch call statistics and predictions
    function fetchCallStatistics() {
      return collection.find().toArray().then((calls) => {
        const callData = calls.map((call) => ({
          date: moment(call.date).format('YYYY-MM-DD'), // Format the date as required
          numberOfCalls: call.incnum, // Replace with your relevant call count field
        }));

        // Group the call data by date
        const groupedCalls = callData.reduce((accumulator, call) => {
          const date = call.date;
          if (!accumulator[date]) {
            accumulator[date] = [];
          }
          accumulator[date].push(call.incnum);
          return accumulator;
        }, {});

        // Calculate predictions for the next day, week, and month
        const today = moment();
        const nextDay = today.clone().add(1, 'day').format('YYYY-MM-DD');
        const nextWeek = today.clone().add(1, 'week').format('YYYY-MM-DD');
        const nextMonth = today.clone().add(1, 'month').format('YYYY-MM-DD');

        // Get the predicted number of calls for the next day, week, and month
        const predictionNextDay = groupedCalls[nextDay] ? calculateAverage(groupedCalls[nextDay]) : null;
        const predictionNextWeek = groupedCalls[nextWeek] ? calculateAverage(groupedCalls[nextWeek]) : null;
        const predictionNextMonth = groupedCalls[nextMonth] ? calculateAverage(groupedCalls[nextMonth]) : null;

        // Return the statistics and predictions
        return {
          statistics: groupedCalls,
          predictions: {
            nextDay: predictionNextDay,
            nextWeek: predictionNextWeek,
            nextMonth: predictionNextMonth,
          },
        };
      });
    }


    // Helper function to calculate the average
    function calculateAverage(arr) {
      const sum = arr.reduce((total, value) => total + value, 0);
      const average = sum / arr.length;
      return Math.round(average);
    }

    function fetchCallPredictions() {
      return new Promise((resolve, reject) => {
        collection
          .aggregate([
            {
              $group: {
                _id: {
                  year: { $year: "$datetimealarm" },
                  month: { $month: "$datetimealarm" },
                  day: { $dayOfMonth: "$datetimealarm" },
                },
                numberOfCalls: { $sum: 1 },
              },
            },
            {
              $sort: {
                "_id.year": 1,
                "_id.month": 1,
                "_id.day": 1,
              },
            },
          ])
          .toArray()
          .then((callStats) => {
            const predictions = callStats.map((call) => {
              return call.numberOfCalls;
            });

            // Store the call statistics in the CallStats collection
            const callStatsCollection = db.collection("CallStats");
            callStatsCollection
              .insertMany(callStats)
              .then(() => {
                resolve(predictions);
              })
              .catch((error) => {
                console.error("Error storing call statistics:", error);
                reject(error);
              });
          })
          .catch((error) => {
            reject(error);
          });
      });
    }

    // Function to calculate call statistics and update CallStats collection
    async function calculateCallStats() {
      try {
        const totalCalls = await collection.countDocuments(); // Total calls count
        const totalCallsThisYear = await collection.countDocuments({
          datetimealarm: {
            $gte: new Date(new Date().getFullYear().toString()),
            $lt: new Date((new Date().getFullYear() + 1).toString())
          }
        }); // Total calls count for current year

        const currentDate = moment().format('YYYY-MM-DD');
        const totalCallsOnCurrentDay = await collection.countDocuments({
          datetimealarm: {
            $gte: new Date(currentDate),
            $lt: new Date(moment(currentDate).add(1, 'day').format('YYYY-MM-DD'))
          }
        }); // Total calls count for current day

        // Update CallStats collection with the calculated statistics
        const callStatsCollection = db.collection('CallStats');
        await callStatsCollection.updateOne(
          { _id: 'current_stats' },
          {
            $set: {
              totalCalls: totalCalls,
              totalCallsThisYear: totalCallsThisYear,
              totalCallsOnCurrentDay: totalCallsOnCurrentDay
            }
          },
          { upsert: true }
        );
      } catch (error) {
        console.error('Error calculating call statistics:', error);
      }
    }

    // Call the calculateCallStats function every time a new call is added
    function handleNewCall(call) {
      collection.insertOne(call)
        .then(() => {
          calculateCallStats();
        })
        .catch((error) => {
          console.error('Error inserting new call:', error);
        });
    }


    // Define a route for /api/predictions
    app.get('/api/predictions', (req, res) => {
      // Call the fetchCallStatistics function to fetch the statistics and predictions data
      fetchCallStatistics()
        .then((data) => {
          // Return only the predictions as JSON response
          res.json(data.predictions);
        })
        .catch((error) => {
          console.error('Error fetching call predictions:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        });
    });






    app.use(express.static('public'));

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
      setInterval(fetchCallStatistics, 300000);
    })
      .on("error", (err) => {
        console.error("Error starting server:", err);
        process.exit(1);
      });

  });
// Handle calls request
app.get('/api/calls', (req, res) => {
  const limit = parseInt(req.query.limit) || 100; // Number of recent calls to fetch

  collection
    .find()
    .sort({ call_id: -1 }) // Sort in descending order of call_id to get the most recent calls
    .toArray()
    .then((calls) => {
      res.json(calls);
    })
    .catch((error) => {
      console.error('Error retrieving recent calls:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});


// Endpoint for getting call statistics
app.get('/api/stats', (req, res) => {
  collection.aggregate([
    {
      $group: {
        _id: null,
        total: { $sum: 1 },
        openCalls: {
          $sum: {
            $cond: [{ $eq: ["$status", "Open"] }, 1, 0]
          }
        },
        closedCalls: {
          $sum: {
            $cond: [{ $eq: ["$status", "Closed"] }, 1, 0]
          }
        },
        callsToDate: { $max: "$call_date" } // Assuming you have a "call_date" field in your collection
      }
    }
  ]).toArray()
    .then((result) => {
      const stats = result[0];
      res.json(stats);
    })
    .catch((error) => {
      console.error('Error retrieving call statistics:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.get('/api/most-recent-call', (req, res) => {
  collection
    .find()
    .sort({ incnum: -1 }) // Sort in descending order based on the call ID to get the most recent call first
    .limit(1)
    .toArray()
    .then(([mostRecentCall]) => {
      let mostRecentIncnum = mostRecentCall ? mostRecentCall.incnum.toString() : null;

      if (mostRecentIncnum) {
        const currentYear = new Date().getFullYear().toString();
        const placeholderDigits = currentYear.slice(0, 4);
        mostRecentIncnum = mostRecentIncnum.replace(placeholderDigits, '');
        mostRecentIncnum = parseInt(mostRecentIncnum);
      }

      res.json({ mostRecentIncnum });
    })
    .catch((error) => {
      console.error('Error retrieving most recent call:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});