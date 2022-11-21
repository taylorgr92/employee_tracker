const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password
    password: "Forest#246",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

db.connection(function (err) {
  if (err) throw err;
});
module.exports = connection; 
function initialPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "view_choices",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all employees",
          "Add a role",
          "Update employee role",
        ],
      },
    ])

    //Switch function to cycle through prompts
    .then(function ({ task }) {
      switch (task) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a role":
          addRole();
          break;
        case "Update employee role":
          updateRole();
          break;
        case "End":
          connection.end();
          break;
      }
    });
}
// View all departments

function viewDepartments() {
  const queryDepartments = `SELECT ID , name FROM department`;

  db.queryDepartments(queryDepartments, function (err, res) {
    if (err) throw err;
    //Printing department reponse data to console table
    console.table(res);
    console.log("Departments viewed!\n");

    initialPrompt();
  });
}
