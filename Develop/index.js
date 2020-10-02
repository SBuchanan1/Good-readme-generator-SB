//variables importing information
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");
// const appendFileAsync util.promisify(fs.appendFile);s

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
        choices: [
            "Installation",
            "Usage",
            "License",
            "Contributors",
            "Tests",
            "Questions",

        ]
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
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
// function to initialize program
function init() {
    inquirer
        .prompt(questions).then((response) => {
            console.log(response);
            let generatedMe = generateMarkdown({ ...response });
            writeToFile("newREADME.md", generatedMe)

            console.log("You generated a new README!");
        });
};// function call to initialize program

init();







