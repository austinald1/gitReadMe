// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return 'I need a value to conntinue';
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of the project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide a installation instructions for the project',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide a usage information for the project',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide a contribution information for the project',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What commands are needed to test this app',
  },
  {
    type: 'list',
    message: 'What is your preferred license for your application?',
    name: 'license',
    choices: [
      'The MIT license',
      'The GPL license',
      'The Apache license',
      'The GNU license',
      'N/A',
    ],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please provide your Github username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log('success');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((result) => {
    console.log(result);
    writeToFile('README.md', generateMarkdown(result));
  });
}

// Function call to initialize app
init();

