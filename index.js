// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'authorName',
        message: 'what is the name of the user?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('a value must be entered here!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should a user operate the application?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('a value must be entered here!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('a value must be entered here!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'write a description for the project',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('a value must be entered here!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'What purpose does the project serve?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('a value must be entered here!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'write installation directions',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('a value must be entered here!');
                return false;
            }
        }
    },
    {
        type: 'type',
        name: 'contributions',
        message: 'tell other developers how they can contribute to the project repository',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('a value must be entered here!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license type',
        choices: ['MIT','Mozilla','Apache','IBM']
     }
];


// generatepage function containing the format of the README page with interpolated answersObject properties

const generatePage = (answersObject) => {
   let license = " "
    if(answersObject.license === "MIT"){
        license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }else if(answersObject.license === "Mozilla"){
        license = " [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
    
    return ` 
# ${answersObject.title}

## Description 

${answersObject.description}


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${answersObject.installInstructions}

## Usage 

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an   folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

 

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.


## License

 ${license}

---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Features

If your project has a lot of features, consider adding a heading called "Features" and listing them there.


## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.

`;
}

//mock data while developing to avoid repetive input -- appAnswers parameter replaced with mockData
const mockData = {
    authorName: "thomas",
    title: "DIY Paint N Sip",
    description: `An app that produces artwork and drink ingredients at random for the user. The drink display works by receiving a user's input (the type of alcohol they desire to use) and fetching a random drink's name and ingredients, 
with instructions for putting it together. The other aspect of the app is simply a generator of random art images from the Metropolitan Museum in New York. If the user desires a new drink or artwork result, they can simply re-click the respective button to receive new content.
technology used: 
`,
    purpose: "The purpose of this app is to provide users with an entertainment tool that can be enjoyed by groups of people, especially during periods of isolation like the Covid-19 quarantine",
    installInstructions: " This application does not require any additional installation",
    contributions: "developers can contribute to this project by pushing new feature branches and bug reports to the repository. Make sure to provide descriptive commit messages describing what was modified"
}


//function to pass the questions array into a prompt and retrieve answers from user
const promptQuestions = () => {
    inquirer.prompt(questions)
        .then(appAnswers => {
            console.log(appAnswers.contributions);
            // generatePage(appAnswers);

            fs.writeFile('README.md', generatePage(appAnswers), err => {
                if (err) {
                    console.log(err);
                }

                console.log("write to file successful");
            })

        });
};




// TODO: Create a function to write README file
/* function writeToFile(data) {
fs.writeFile('README.md',  , err=>{
if(err){
console.log(err);
}

console.log("write to file successful");
})
}
*/





// TODO: Create a function to initialize app
function init() {
    //promptQuestions();
    promptQuestions();
}

// Function call to initialize app
init();




/*

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

*/