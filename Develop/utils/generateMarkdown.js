// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ![<ALT>](https://img.shields.io/badge/License-${response.message}-purple.svg)

  ##Description
${response.description}
##TableOfContents
${response.tableOfContents}
## Installation
${response.installation}
## Usage
${response.usage}
## License
${response.license}
## Contributors
${response.contributors}
## Tests
${response.tests}
## Questions
${response.questions}
`


}

module.exports = generateMarkdown;
