const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('api/settings/get', (req, res) => {
  const setting = req.query.setting;
  res.setHeader('Content-Type', 'application/json');
  if (!setting) {
    res.send(JSON.stringify({ error: 'No setting provided' }));
  } else {
    let settings = readSettings();
    if (settings.includes(setting)) {
      res.send(JSON.stringify({ setting: setting, value: settings[setting] }));
    } else {
      res.send(JSON.stringify({ error: 'Setting not found' }));
    }
  }
});

app.get('api/settings/set', (req, res) => {
  const setting = req.query.setting;
  const value = req.query.value;
  res.setHeader('Content-Type', 'application/json');
  if (!setting) {
    res.send(JSON.stringify({ error: 'No setting provided' }));
  } else if (!value) {
    res.send(JSON.stringify({ error: 'No value provided' }));
  } else {
    let settings = readSettings();
    settings[setting] = value;
    writeSettings(settings);
    res.send(JSON.stringify({ setting: setting, value: value }));
  }
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);



function readSettings() {
  return JSON.parse(fs.readFileSync('./settings.json'));
}

function writeSettings(settings) {
  fs.writeFileSync('./settings.json', JSON.stringify({settings}));
}