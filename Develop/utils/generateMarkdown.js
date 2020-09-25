// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![<ALT>](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>purple)

`;
}

module.exports = generateMarkdown;
