const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:server');

const app = express();
const port = 80;
const connectionURL = 'mongodb+srv://mifd413:k72CBvWHm4TvN3h8@calldata.vbgrvc3.mongodb.net/CallData?retryWrites=true&w=majority';
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
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// Handle GET request to '/'
app.get('/', (req, res) => {
  collection
    .findOne({})
    .then((result) => {
      if (result) {
        res.json({ value: result.value });
      } else {
        res.status(404).send('No data found');
      }
    })
    .catch((err) => {
      console.error('Error retrieving data from MongoDB:', err);
      res.status(500).send('Error fetching data from MongoDB');
    });
});

// Handle POST request to '/addcall'
app.post('/addcall', (req, res) => {
    collection
      .findOne({}, { value: 1 })
      .then((result) => {
        let newValue = 1;
        if (result) {
          newValue = result.value + 1;
          collection.updateOne({}, { $set: { value: newValue } })
            .then(() => res.json({ value: newValue }))
            .catch((err) => {
              console.error('Error updating data in MongoDB:', err);
              res.status(500).send('Error updating data in MongoDB');
            });
        } else {
          collection.insertOne({ value: 1 })
            .then(() => res.json({ value: newValue }))
            .catch((err) => {
              console.error('Error inserting data into MongoDB:', err);
              res.status(500).send('Error inserting data into MongoDB');
            });
        }
      })
      .catch((err) => {
        console.error('Error retrieving data from MongoDB:', err);
        res.status(500).send('Error retrieving data from MongoDB');
      });
  });
  