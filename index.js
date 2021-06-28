// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'authorName',
        message: 'Enter name and github link (Name : github)',
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
        message: 'write a description for the project (what it does and its purpose)',
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
        name: 'imageLink',
        message: 'please insert image link to display usage, or leave blank'
    },
    {
        type: 'type',
        name: 'contributing',
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
     },
     {
        type: 'input',
        name: 'credits',
        message: 'insert github links of contributors, if any (Name : <Githublink>)',
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
        name: 'tests',
        message: 'If any, what tests have you prepared for application functionality?',
        
    },
    {
        type: 'input',
        name: 'contactQuestions',
        message: 'insert email and github for developers to reach you, separated by semicolon (;) ',
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
        name: 'videoLink',
        message: 'insert a presentation video url if you have one, otherwise omit this question',
        
    }

];


// generatepage function containing the format of the README page with interpolated answersObject properties

const generatePage = (answersObject) => {
  
  // conditional to define the type of license to load into the license variable
    let license = " "
    if(answersObject.license === "MIT"){
        license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }else if(answersObject.license === "Mozilla"){
        license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }else if(answersObject.license === "IBM"){
        license = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    }else if(answersObject.license === "Apache"){
        license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    
    return ` 
# ${answersObject.title}

## Description 

${answersObject.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${answersObject.installInstructions}

## Usage 

${answersObject.usage}
${answersObject.imageLink}


## Credits
${answersObject.authorName} 

${answersObject.credits}


## License

${license}

---


## Contributing

${answersObject.contributing}


## Tests
${answersObject.tests}

## Questions 

${answersObject.contactQuestions}

## Video Link

${answersObject.videoLink}

`;
}

//mock data while developing to avoid repetive input -- 'appAnswers' parameter replaced with 'mockData'
const mockData = {
    authorName: "Thomas Walker : https://github.com/twalker7",

    title: "DIY Paint N Sip",
    
    description: `An app that produces artwork and drink ingredients at random for the user. The drink display works by receiving a user's input (the type of alcohol they desire to use) and fetching a random drink's name and ingredients, 
                with instructions for putting it together. The other aspect of the app is simply a generator of random art images from the Metropolitan Museum in New York. If the user desires a new drink or artwork result, they can simply re-click the respective button to receive new content.
                The purpose of this app is to provide users with an entertainment tool that can be enjoyed by groups of people, especially during periods of physical isolation like the Covid-19 quarantine
                `,
    
    installInstructions: ` Base technology used: CSS, HTML, Javascript. Additionally, you must install a CDN for each of the three API techonologies used: jQuery, Foundation, and Google Fonts.`,

    contributing: `Developers can contribute to this project by pushing new feature branches and bug reports to the repository. Please make sure to provide fairly descriptive commit messages describing what was modified!
    Additionally, we adhere to the industry standard Contributor Covenant found at this link: [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
    `,

    usage: 
        `Drink generator: select a drink ingredient provided in the dropdown menu, then click the 'drink' button to produce a random result. The result will consist of a drink name, its ingredients, and instructions to put it together.
        To retrieve a new artwork image, simply click the 'paint' button and in a few moments a new image will appear. 
        * for example: I click the dropdown and select vodka, then push the 'drink' button. The app returns me the name of a drink, list of ingredients, and a list of instructions.
        
        `,
    
    credits: 
            `Asher Bertraun https://github.com/abergtra, 
             Newton Armstrong https://github.com/Narmstrongv`,

    tests: 
        ` the basic test to run is to determine whether each button-click will produce new content. As out current MVP runs, it does respond to each button click with new drink information and artwork; however there is a slight buffer thay might cause problems for the user.
            *
        `,
    license: "MIT",

    imageLink : '![DIY Paint-N-Sip Screenshot](images/DIYPNS2.png)',

    contactQuestions: ` Thomasnwalker@yahoo.com ; github.com/twalker7`,

    videoLink : 'https://drive.google.com/file/d/1jRy989kU2slt4czG0tDcKJ1iDuh-vYfG/view'

    
}


//function to pass the questions array into a prompt and retrieve answers from user
const promptQuestions = () => {
    inquirer.prompt(questions)
        .then(appAnswers => {
            console.log(appAnswers.contributing);
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