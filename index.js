const express = require('express');
const { MongoClient } = require('mongodb');
const axios = require('axios');
const debug = require('debug')('app:server');

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
      .then(async (response) => {  // Add 'async' keyword here
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


    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
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





app.use(express.static('public'));
