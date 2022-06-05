const sqlite = require("better-sqlite3");
const path = require("path");

const db = new sqlite(path.resolve("db/database.db"), {
  readonly: true, // In our case, we don't want to add any users
  verbose: console.log, // Displays the queries in the console
  fileMustExist: true, // if the database does not exist, an Error will be thrown instead of creating a new file.
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
