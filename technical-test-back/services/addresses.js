const db = require("../services/db");
const config = require("../config");

function getAddresses(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM addresses LIMIT ?,?`, [
    offset,
    config.listPerPage,
  ]);
  const meta = { page };

  return {
    data,
    meta,
  };
}

module.exports = {
  getAddresses,
};
