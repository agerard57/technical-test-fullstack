// Load the Required Modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const getRoutes = require("./routes");

const app = express();

// Middelwares instantiated
app.use(bodyParser.json());
app.use(cors());

// Controllers or Routes
getRoutes(app);

// Server config
const consoleMessage = require("./utils/consoleMessage");

// We could use .env, but for this technical demo,
// I'll just set the port to 3001 by default
const port = 3001;

// Setup server to start listening
app.listen(port, consoleMessage(port));
