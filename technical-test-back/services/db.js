const sqlite = require("better-sqlite3");
const path = require("path");
const db = new sqlite(path.resolve("db/database.db"), {
  verbose: console.log,
  fileMustExist: true,
});

function query(sql, params) {
  return db.prepare(sql).all(params);
}

function run(sql, params) {
  return db.prepare(sql).run(params);
}

module.exports = {
  query,
  run,
};
