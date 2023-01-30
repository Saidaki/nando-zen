const mysql = require("mysql2");

var dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "challengedb",
  port: 3306,
  connectTimeout: 10000,
};
var pool = mysql.createPool(dbConfig);

pool.getConnection(function (err, connection) {
  console.log("db connected");
});

pool.on("error", function (err) {
  console.log(err.code);
});

module.exports = pool;
