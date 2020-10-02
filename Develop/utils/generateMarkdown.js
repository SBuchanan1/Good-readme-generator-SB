// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ![<ALT>](https://img.shields.io/badge/License-${response.message}-purple.svg)

  *[description](#description)
${response.description}
*[tableOfContents](#tableOfContents)
${response.tableOfContents}
*[installation](#installation)
${response.installation}
*[usage](#usage)
${response.usage}
*[license](#license)
${response.license}
*[contributors](#contributors)
${response.contributors}
*[tests](#tests)
${response.tests}
*[response](#response)
${response.questions}
`


}

module.exports = generateMarkdown;
