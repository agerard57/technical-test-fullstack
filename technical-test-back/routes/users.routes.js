const users = require("../services/users");

module.exports = function (app, srcPath) {
  // GET - All users
  app.get("/users", (req, res, next) => {
    try {
      res.json(users.getUsers(req.query.page));
    } catch (err) {
      console.error(`Error while getting users `, err.message);
      next(err);
    }
  });
};
