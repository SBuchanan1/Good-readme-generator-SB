// 
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("/user);

const appendFileAsync util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Your project title",
    },
    {
        type: "input",
        name: "description",
        message: "Description of your project",
    },
    {
        type: "list",
        name: "table of contents",
        message: "List table of contents",
    },
    {
        type: "input",
        name: "installation",
        message: "Describe steps to install your project",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for use",
    {
        type: "input",
        name: "license",
        message: "What license did you use?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who were the contributors of this project?",
    },
    {
        type: "input",
        name: "tests",
        message: "What tests did you  run?",
    },
    {
        type: "input",
        name: "questions",
        message: "Further questions?",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", generateMarkdown(response), function (err) {
        if (err) throw err;
    });

}

// function to initialize program
function init() {
    inquirer.
        prompt(questionsArray)
        .then((response) => writeToFile(response))
        .catch((err) => console.log(err));
}

// function call to initialize program
init();

inquirer
    .prompt(questionsArray).then(function (response) {
        console.log(response);
    });

choices: [
    "Installation",
    "Usage",
    "License",
    "Contributors",
    "Tests",
    "Questions",

]