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

app.get('/api/settings/get', (req, res) => {
  const setting = req.query.setting;
  res.setHeader('Content-Type', 'application/json');
  if (!setting) {
    res.send(JSON.stringify({ error: 'No setting provided' }));
  } else {
    let settings = readSettings();
    if (setting in settings) {
      res.send(JSON.stringify({ setting: setting, value: settings[setting] }));
    } else {
      res.send(JSON.stringify({ error: 'Setting not found' }));
    }
  }
});

app.get('/api/settings/set', (req, res) => {
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
    processSettingsEvents(setting, value);
  }
});

app.get('/api/settings/getAll', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(readSettings());
});

app.get('/api/opendrop/status', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (!openDropThread) {
    res.send(JSON.stringify({ value: "Offline" }));
  } else {
    res.send(JSON.stringify({ value: openDropStatus }));
  }
});

app.get('/api/opendrop/restart', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  stopOpenDrop();
  startOpenDrop();
  res.send(JSON.stringify({ value: "Restarted" }));
});



let wifiStatus = false;
const wifi = require('node-wifi');
app.get('/api/wifi/status', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ value: isWifiRunning() }));
});

app.get('/api/wifi/start', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (isWifiRunning()) {
    res.send(JSON.stringify({ error: "Already running" }));
    return;
  }
  wifi.init({
    iface: null,
  });
  wifiStatus = true;
  res.send(JSON.stringify({ value: "Started" }));
});

app.get('/api/wifi/stop', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (!isWifiRunning()) {
    res.send(JSON.stringify({ error: "Not running" }));
    return;
  }
  wifiStatus = false;
  wifi.disconnect(error => {
    wifi.init = null;
    res.send(JSON.stringify({ value: "Stopped" }));
  });
});

app.get('/api/wifi/networks', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (!isWifiRunning()) {
    res.send(JSON.stringify({ error: "Not running" }));
    return;
  }
  wifi.scan((error, networks) => {
    if (error) {
      res.send(JSON.stringify({ error: error }));
    } else {
      res.send(JSON.stringify({ value: networks }));
    }
  });
});

app.get('/api/wifi/current', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (!isWifiRunning()) {
    res.send(JSON.stringify({ error: "Not running" }));
    return;
  }
  wifi.getCurrentConnections((error, currentConnections) => {
    if (error) {
      res.send(JSON.stringify({ error: error }));
    } else {
      res.send(JSON.stringify({ value: currentConnections }));
    }
  });
});

app.get('/api/wifi/saved', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ value: readSavedNetworks() }));
});

app.get('/api/wifi/save', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.query.network) {
    writeSavedNetworks([req.query.network, ...readSavedNetworks()]);
    res.send(JSON.stringify({ value: "Saved" }));
  } else {
    res.send(JSON.stringify({ error: "No network provided" }));
  }
});

app.get('/api/wifi/remove', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.query.ssid) {
    let savedNetworks = readSavedNetworks();
    let newSavedNetworks = savedNetworks.filter(network => network.ssid !== req.query.ssid);
    writeSavedNetworks(newSavedNetworks);
    res.send(JSON.stringify({ value: "Removed" }));
  } else {
    res.send(JSON.stringify({ error: "No network provided" }));
  }
});

app.get('/api/wifi/connect', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.query.ssid && req.query.password) {
    if (!isWifiRunning()) {
      res.send(JSON.stringify({ error: "Not running" }));
      return;
    }
    wifi.connect({ ssid: req.query.ssid, password: req.query.password }, () => {
      wifi.getCurrentConnections((error, currentConnections) => {
        if (error) {
          res.send(JSON.stringify({ error: "Failed to connect" }));

        } else {
          res.send(JSON.stringify({ value: "Connected" }));
          writeSavedNetworks([{ ssid: req.query.ssid, password: req.query.password }, ...readSavedNetworks()]);
        }
      });
    });
  } else {
    res.send(JSON.stringify({ error: "No network provided" }));
  }
});

function isWifiRunning() {
  return wifiStatus;
}


if (readSettings()["enableWifi"] === "true") {
  wifi.init({
    iface: null,
  });
  wifiStatus = true;
}

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);



function readSettings() {
  return JSON.parse(fs.readFileSync('./settings.json'));
}

function writeSettings(settings) {
  fs.writeFileSync('./settings.json', JSON.stringify(settings));
}

function readSavedNetworks() {
  return JSON.parse(fs.readFileSync('./savedNetworks.json')).networks;
}

function writeSavedNetworks(networks) {
  fs.writeFileSync('./savedNetworks.json', JSON.stringify({ networks: networks }));
}

let openDropThread;
let openDropStatus = "Offline";

function startOpenDrop() {

  openDropStatus = "Booting";

  const { spawn } = require("child_process");

  openDropThread = spawn("opendrop", ["receive", "-n", String(readSettings()["openDropDisplayName"])]);

  openDropThread.stdout.on("data", data => {
    console.log(`OpenDrop: ${data}`);
  });

  openDropThread.stderr.on("data", data => {
    console.log(`OpenDrop: ${data}`);
    openDropStatus = "Online";
  });

  openDropThread.on('error', (error) => {
    console.log(`OpenDrop: ${error.message}`);
    openDropStatus = "Errored";
  });

  openDropThread.on("close", code => {
    console.log(`OpenDrop exited with code ${code}`);
    openDropStatus = "Offline";
  });


}

function stopOpenDrop() {
  openDropThread.kill();
}

if (readSettings()["enableOpenDrop"] === "true") {
  startOpenDrop();
}

function processSettingsEvents(setting, value) {
  if (setting === "enableOpenDrop") {
    if (value === "true") {
      stopOpenDrop();
      startOpenDrop();
    } else {
      stopOpenDrop();
    }
  }
}