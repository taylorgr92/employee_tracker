// Import and require mysql2
const mysql = require("mysql2");

// Express middleware
const connection = mysql.createConnection({
  host: "localhost",
  // MySQL username,
  user: "root",
  // TODO: Add MySQL password
  password: "Forest#246",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
});
module.exports = connection;
