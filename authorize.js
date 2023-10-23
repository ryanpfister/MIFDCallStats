const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const express = require('express');

// Load the credentials file
const credentials = require('./credentials.json');
const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;

// Configure authentication
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const app = express();
const port = 3000;

// Handle the authorization callback
app.get('/oauth2callback', (req, res) => {
  const code = req.query.code;
  oAuth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error('Error retrieving access token:', err);
      res.send('Error retrieving access token, please try again.');
      return;
    }
    oAuth2Client.setCredentials(token);
    // Save the token for later use
    fs.writeFileSync('./token.json', JSON.stringify(token));
    res.send('Authorization successful! Access token saved to token.json. You can close this window now.');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Authorization server started on port ${port}`);
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  console.log('Authorize this app by visiting this URL:', authUrl);
});
