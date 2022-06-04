const db = require("../services/db");
const config = require("../config");

function getUsers(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(
    `
    SELECT *
    FROM users
    ORDER BY registered DESC
    LIMIT ?,?
    `,
    [offset, config.listPerPage]
  );
  const meta = { page };

  return {
    data,
    meta,
  };
}

module.exports = {
  getUsers,
};
