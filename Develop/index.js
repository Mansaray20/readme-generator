// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
{
        type: 'input',
        message: 'name your title here?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Write some description.',
        name: 'description',
    },

    {
        type: 'input',
        message: 'Author Name here.',
        name: 'author',
        default: 'John Mansaray',
    },

    {
        type: 'input',
        message: ' email Adress here.',
        name: 'email',
        default: 'billionpond.4@gmail.com',
    },

    {
        type: 'input',
        message: 'Github Account here.',
        name: 'mansaray20',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 fs.writeFile("./README.md",generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(writeToFile);
}

// Function call to initialize app
init();
