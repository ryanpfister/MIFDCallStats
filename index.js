const express = require('express');
const { google } = require('googleapis');
const fs = require('fs');


// Create an instance of the Express.js app
const app = express();
const port = 3000;

// Define the Google Sheets file ID and range
const spreadsheetId = '1YwHE1GA2HrAoGCUBg7svh_Ol7-N3R1kRB9XkEOqEx90';
const range = 'Sheet1!A1:A1'; // Assuming the value is in cell A1

// Load the credentials file
const credentials = require('./credentials.json');

// Configure authentication
const oAuth2Client = new google.auth.OAuth2();
const token = fs.readFileSync('./token.json');
oAuth2Client.setCredentials(JSON.parse(token));


// Create a GET route
app.get('/', (req, res) => {
  // Call the Google Sheets API to get the values
  const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
  sheets.spreadsheets.values.get(
    {
      spreadsheetId,
      range,
    },
    (err, response) => {
      if (err) {
        console.error('The API returned an error:', err);
        res.status(500).send('Error fetching data from Google Sheets');
      } else {
        const values = response.data.values;
        const value = values[0][0]; // Assuming there is only one value in the specified range
        res.send(`Current value: ${value}`);
      }
    }
  );
});

// Create a POST route to increase the value
app.post('/addcall', (req, res) => {
    // Call the Google Sheets API to get the current value
    const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
    sheets.spreadsheets.values.get({
      spreadsheetId,
      range
    }, (err, response) => {
      if (err) {
        console.error('The API returned an error:', err);
        res.status(500).send('Error fetching data from Google Sheets');
      } else {
        const value = parseInt(response.data.values[0][0]);
        const newValue = value + 1;
  
        // Call the Google Sheets API to update the value
        sheets.spreadsheets.values.update({
          spreadsheetId,
          range,
          valueInputOption: 'RAW',
          resource: {
            values: [[newValue]]
          }
        }, (err, response) => {
          if (err) {
            console.error('The API returned an error:', err);
            res.status(500).send('Error updating data in Google Sheets');
          } else {
            res.send(`Value increased to: ${newValue}`);
          }
        });
      }
    });
  });

// Start the server
app.listen(3000, () => {
  console.log(`Server is listening on port`);
});
