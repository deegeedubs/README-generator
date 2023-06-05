// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Markdown = require('./utils/generateMarkdown.js');

console.log(Markdown);

// TODO: Create an array of questions for user input
const questions = [
    'Name of project:', 
    'Description of project:',
    'Technology used:',
    'Usage information:',
    'Contribution Guidelines:',
    'Test Instructions:',
    'GitHub Username:',
    'Email Address:',
    'License:'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => console.log(err));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'checkbox',
            message: questions[2],
            choices: [
                'HTML',
                'CSS',
                'Javascript',
                'Node.js',
                'Inquirer.js'
            ],
            name: 'technology'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contribution'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'instructions'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'email'
        },
        {
            type: 'list',
            message: questions[8],
            choices: ['Apache', 'MIT', 'Mozilla', 'GPLv3', 'none'],
            name: 'license'
        },
      ]).then((answers) => {
        console.log(answers);
        const output = Markdown(answers);
        writeToFile(`README-${answers.github}`,output);
      });
}

// Function call to initialize app
init();
