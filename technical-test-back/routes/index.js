const express = require("express");

module.exports = function routes(app) {
  // ///////
  // Routes
  require("./users.routes")(app);

  // ////////////////////
  // Basic error message
  app.get("/", (_req, res) => {
    res.json({ error: "This URL doesn't exist" });
  });

  // ////////////////////////////////////////
  // Redirection in case an url doesnt exist
  app.get("*", (_req, res) => {
    res.redirect("/");
  });
};
