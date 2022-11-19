//Require insomnia package
const inquirer = require("inquirer");
require("console.table");

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
        viewDepartments;
      case "View all employees":
        viewEmployees;
      case "Add a role":
        addRole;
      case "Update employee role":
        updateRole;
    }
  });
