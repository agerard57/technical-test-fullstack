const users = require("../services/users");

module.exports = function (app) {
  // GET - All users data
  app.get("/users", (req, res, next) => {
    try {
      res.json(users.getDataForAllUsers(req.query.page));
    } catch (err) {
      console.error(`Error while getting users `, err.message);
      next(err);
    }
  });

  // GET - User data by id
  app.get("/user/:userId", (req, res, next) => {
    try {
      const singleUserData = users.getDataByUserId(req.params.userId)[0];
      res.json(singleUserData);
    } catch (err) {
      console.error(`Error while getting users `, err.message);
      next(err);
    }
  });
};
