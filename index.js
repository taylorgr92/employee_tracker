//Require insomnia package
const inquirer = require('inquirer');

inquirer
.prompt([{
    type:'list',
    name:'view_choices',
    message: 'What would you like to do?',
    choices: ['View all departments', 'View all employees','Add a role','Update employee role']
    
}
])

.then((response) =>
response.confirm === response.view_choices
  ? console.log('Success!')
  : console.log('You forgot your password already?!')
);