// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseType = data.license;
  let licenseBadge = ''
  if(licenseType === 'Apache') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if (licenseType === 'MIT') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (licenseType === 'Mozilla') {
    licenseBadge = `[![MPL 2.0](https://img.shields.io/badge/License-GPL-blue.svg)]`
  } else if (licenseType === 'GPLv3') {
    licenseBadge = `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else {
    licenseBadge = ""
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseType = data.license;
  let licenseLink = ''
  if(licenseType === 'Apache') {
    licenseLink = `(https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === 'MIT') {
    licenseLink = `(https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'Mozilla') {
    licenseLink = `(https://opensource.org/licenses/MPL-2.0)`
  } else if (licenseType === 'GPLv3') {
    licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    data.license = ""
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseType = data.license;
  let licenseText = ''
  if(licenseType === 'Apache') {
    licenseText = `Licensed under [Apache](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === 'MIT') {
    licenseText = `Licensed under MIT](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'Mozilla') {
    licenseText = `Licensed under [Modzilla Public License](https://opensource.org/licenses/MPL-2.0)`
  } else if (licenseType === 'GPLv3') {
    licenseText = `Licensed under [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    data.license = "No License Used"
  }
  return licenseText;
}

function renderTechnologyUsed(data){
  let tech = data.technology;
  let installText = '';
  for (var i = 0; i<tech.length; i++){
    installText += `
    - ${tech[i]}`;
  }
  return installText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data);
  let licenseLink = renderLicenseLink(data);
  let licenseText = renderLicenseSection(data);
  let installText = renderTechnologyUsed(data);
  console.log(installText);
  return `# ${data.title} ${licenseBadge}${licenseLink}

  ## Description

  ${data.description}

  ## Table of Contents

   - [Installation](#installation)
   - [Usage](#usage)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [License](#license)
   - [Questions](#contact)

  ## Installation <a id = "installation"></a>
  ${installText}

  ## Usage <a id = "usage"></a>

  ${data.usage}

  ## Contributing <a id = "contributing"></a>

  ${data.contribution}

  ## Tests <a id = "tests"></a>

  ${data.instructions}

  ## License <a id = "license"></a>
  
  ${licenseText}

  ## Questions <a id = "contact"></a>

  GitHub Profile: https://github.com/${data.github}
  
  Any questions can be sent to: ${data.email}
  The subject of the email should be "${data.title} Inquiry"
`;
}

module.exports = generateMarkdown;
