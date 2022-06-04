// Load the Required Modules
const express = require("express");

const getRoutes = require("./routes");

const app = express();

// Controllers or Routes
getRoutes(app);

// Server config
const consoleMessage = require("./utils/consoleMessage");
const port = 3001;

// Setup server to start listening
app.listen(port, consoleMessage(port));
