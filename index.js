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
    }
  });

//  View all departments function
function viewDepartments() {




}