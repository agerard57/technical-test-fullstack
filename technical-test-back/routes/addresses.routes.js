const addresses = require("../services/addresses");

module.exports = function (app, srcPath) {
  // GET - All addresses
  app.get("/addresses", (req, res, next) => {
    try {
      res.json(addresses.getAddresses(req.query.page));
    } catch (err) {
      console.error(`Error while getting addresses`, err.message);
      next(err);
    }
  });
};
