// const licenseBadges = require("./licenseBadges");

// Function to Generate README

function documentGenerator(response) {
  return `#${response.title}
  

  ## Description
  ${response.description}



  ##Installation
  ${response.installation}

  ##Usage
  ${response.usage}

  ##Contributors
  ${response.contributors}

  ##Tests
  ${response.tests}

  ##Questions
  Please reach out to Sydney Buchanan for further questions


` ;

}
module.exports = generateMarkdown;