const express = require('express');
const { google } = require('googleapis');
const fs = require('fs');


// Create an instance of the Express.js app
const app = express();
const port = 80;

// Define the Google Sheets file ID and range
const spreadsheetId = '1YwHE1GA2HrAoGCUBg7svh_Ol7-N3R1kRB9XkEOqEx90';
const range = 'Sheet1!A1:A1'; // Assuming the value is in cell A1

// Load the credentials file
const credentials = require('./credentials.json');

// Create an OAuth2 client using the credentials
const oAuth2Client = new google.auth.OAuth2(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uris[0]
);

// Check if the token.json file exists
if (fs.existsSync('token.json')) {
  // Load the token from the file
  const token = fs.readFileSync('token.json');
  oAuth2Client.setCredentials(JSON.parse(token));
}

// Generate the authentication URL and log it
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: [
    'https://www.googleapis.com/auth/spreadsheets.readonly',
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});
console.log('Authorize this app by visiting this URL:', authUrl);

// Start the server
app.listen(80, () => {
    console.log(`Server is listening on port`);
  });
  
// Create a route to handle the OAuth2 callback
app.get('/auth/callback', (req, res) => {
  const code = req.query.code;
  oAuth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error('Error retrieving access token:', err);
      res.status(500).send('Error retrieving access token');
      return;
    }
    oAuth2Client.setCredentials(token);
    fs.writeFileSync('token.json', JSON.stringify(token));
    res.redirect('/');
  });
});

app.get('/callback', (req, res) => {
    const code = req.query.code;
    // Use the code to exchange for access and refresh tokens with the Google API
    // Handle the tokens and store them securely for further API requests
    res.send('Authorization successful! You may close this page.');
  });

  app.get('/auth', (req, res) => {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/spreadsheets.readonly',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
      redirect_uri: 'http://localhost:80/callback',
    });
    res.redirect(authUrl);
  });

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
          const values = response?.data?.values;
          if (values && values.length > 0 && values[0].length > 0) {
            const value = values[0][0];
            res.send(`Value: ${value}`);
          } else {
            res.status(500).send('No value found in the specified range');
          }
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

