const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  db: "eduearth",
  dialect: "mysql",
  port: "3001",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  connectionLimit: 10, // this is the max number of connections before your pool starts waiting for a release
  multipleStatements: true,
  insecureAuth: true,
});

module.exports = db;
