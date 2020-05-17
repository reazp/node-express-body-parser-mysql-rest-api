const mysql = require("mysql");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "api",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
};

const connection = mysql.createConnection(dbConfig);
connection.connect();

module.exports = connection;
