const express = require("express");

const srcPath = __dirname.replace("routes", "");

module.exports = function routes(app) {
  const router = express.Router();

  // ///////
  // Routes
  require("./users.routes")(app, srcPath);

  app.get("/", (_req, res) => {
    res.json({ message: "Hello world" });
  });

  // ////////////////////////////////////////
  // Redirection in case an url doesnt exist
  app.get("*", (_req, res) => {
    res.redirect("/");
  });
};
