const licenseBadges = require("./licenseBadges");

// Function to Generate README

function documentGenerator(response) {
  return `#${response.title}
  ![<ALT>](https://img.shields.io/badge/License-${response.message}-purple.svg)

  ## Description
  ${response.description}

  ***

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  * 
  
  ***

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