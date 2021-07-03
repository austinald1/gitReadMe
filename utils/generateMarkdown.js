// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case 'The MIT license':
        return 'https://img.shields.io/badge/license-MIT-blue.svg';
      case 'The GPL license':
        return 'https://img.shields.io/badge/license-GPL-blue.svg';
      case 'The Apache license':
        return 'https://img.shields.io/badge/license-Apache-blue.svg';
      case 'The GNU license':
        return 'https://img.shields.io/badge/license-GNU-blue.svg';
      default:
        return '';
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}
  
  // need to do the badge and the license link
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    https://github.com/${data.username}/${data.title}
    ![GitHub license](${renderLicenseBadge(data.license)})
    # Description
    ${data.description}
    # Table of Contents 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    # Installation
    The following necessary dependencies must be installed to run the application properly: ${
      data.installation
    }
    # Usage
    In order to use this app, ${data.usage}
    # License
    This project is licensed under the ${data.license} license. 
    # Contributing
    ​Contributors: ${data.contributing}
    # Tests
    The following is needed to run the test: ${data.tests}
    # Questions
    If you have any questions about the repo, open an issue or contact ${
      data.username
    } directly at : ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;
  