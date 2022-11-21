const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password
    password: "",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);
connection.connect(function (err) {
  if (err) throw err;

  initialPrompt();
});


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

