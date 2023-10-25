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
            .then((response) => {
                const dispcall = response.data.dispcall;
                const callIds = dispcall.map(call => call.call_id);

                // Find calls that do not exist in the database
                const existingCallsPromise = collection.find({ call_id: { $in: callIds } }).toArray();
                const newCalls = dispcall.filter(call => !callIds.includes(call.call_id));

                existingCallsPromise
                    .then(existingCalls => {
                        const existingCallIds = existingCalls.map(call => call.call_id);

                        // Filter out any calls that already exist in the database
                        const filteredCalls = newCalls.filter(call => !existingCallIds.includes(call.call_id));

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
                    //console.log(response.data);
                    const newCalls = response.data.dispcall;

                    if (!Array.isArray(newCalls)) {
                        console.error('Received response without dispcall array');
                        return;
                    }

                    // Save only the new calls to the database
                    collection.find().toArray()
                        .then((existingCalls) => {
                            const existingCallIds = existingCalls.map(call => call.call_id);

                            const filteredCalls = newCalls.filter(call => !existingCallIds.includes(call.call_id));

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
        }, 30000); // 30 seconds




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
    const limit = 10; // Number of recent calls to fetch
  
    collection
      .find()
      .sort({ call_id: -1 }) // Sort in descending order of call_id to get the most recent calls
      .limit(limit)
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
  


app.use(express.static('public'));
