const db = require("../services/db");
const config = require("../config");

// Get all columns from "users" and "addresses" for every user
// Also limit the results per pages
function getDataForAllUsers(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(
    `
    SELECT u.id, u.firstName, u.lastName, u.phone, a.city
    FROM users u, addresses a
    WHERE u.id = a.userId
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

// Get all columns from "users" and "addresses" for every a specific user
function getDataByUserId(userId) {
  return (data = db.query(
    `
    SELECT u.id, u.firstName, u.lastName, u.gender, u.email, u.age, u.phone, u.registered, a.streetNumber, a.street, a.postalCode, a.city
    FROM users u, addresses a
    WHERE u.id = ?
    AND u.id = a.userId
    `,
    [userId]
  ));
}

module.exports = {
  getDataForAllUsers,
  getDataByUserId,
};
