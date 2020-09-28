// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![<ALT>](https://img.shields.io/badge/${response.label}-${response.message}-${response.color})
${response.description}
${response.tableOfContents[0]}
${response.tableOfContents[1]}
${response.tableOfContents[2]}
${response.tableOfContents[3]}
${response.tableOfContents[4]}
${response.tableOfContents[5]}
${response.installation}
${response.usage}
${response.license}
${response.contributors}
${response.tests}
${response.questions}
`

    ; { type: inputs }
}

module.exports = generateMarkdown;
