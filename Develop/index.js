// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [ 
    {
      name: "title",
      type: "input",
      message: "What is the Title of Your Project?"
    },
    {
      name: "description",
      type: "input",
      message: "Please describe your Project."
    },
    {
      name: "installation",
      type: "input",
      message: "Please provide the Installation Instructions."
    },
    {
        name: "usage",
        type: "input",
        message: "Please provide the Usage Instructions."
      },
      {
        name: "contribution",
        type: "input",
        message: "Please provide the Contributing Guidelines."
      },
      {
        name: "test",
        type: "input",
        message: "Please provide the Test Instructions."
      },
      {
        name: "license",
        type: "list",
        message: "Please select the license for this project.",
        choices: ['MIT License', 'Open Data Commons Attrubution License', 'Apache 2.0 License']
      },
      {
        name: "copyright_name",
        type: "input",
        message: "What name do you want to use for your copyright?"
      },
      {
        name: "copyright_year",
        type: "input",
        message: "What year do you want to use for your copyright?"
      },
      {
        name: "github_username",
        type: "input",
        message: "What is your GitHub Username?"
      },
      {
        name: "email",
        type: "input",
        message: "What is your email for further questions?"
      }
  ];

// TODO: Create a function to initialize app

function init() {
    inquirer
    .prompt(questions)
    .then(data => {  
    const filename =
    data.title
    .toLowerCase()
    .split(' ')
    .join('')+'.md';
    // TODO: Create a function to write README file
    fs.writeFile(filename, markdown(data), function(err) {
      if (err) {
        return console.log(err);
      }
    });
  });
}

// Function call to initialize app
init();
