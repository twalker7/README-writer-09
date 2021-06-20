// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'authorName',
    message: 'what is the name of the user?',
    validate: input=>{
        if(input){
            return true;
        }else{
            console.log('a value must be entered here!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
    validate: input=>{
        if(input){
            return true;
        }else{
            console.log('a value must be entered here!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'write a description for the project',
    validate: input=>{
        if(input){
            return true;
        }else{
            console.log('a value must be entered here!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'purpose',
    message: 'What purpose does the project serve?',
    validate: input=>{
        if(input){
            return true;
        }else{
            console.log('a value must be entered here!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'installInstructions',
    message: 'write installation directions',
    validate: input=>{
        if(input){
            return true;
        }else{
            console.log('a value must be entered here!');
            return false;
        }
    }
},
{
    type: 'type',
    name: 'contributions',
    message: 'tell other developers how they can contribute to the project repository',
    validate: input=>{
        if(input){
            return true;
        }else{
            console.log('a value must be entered here!');
            return false;
        }
    }
}
];


// generatepage function containing the format of the README page with interpolated answersObject properties

const generatePage = (answersObject)=>{
    return ` 
        # Title: ${answersObject.title}

        ## Description: 
        
        ${answersObject.description}
        
        ## Purpose:
        ${answersObject.purpose}

        ## Installation Instructions:
        ${answersObject.installInstructions}

        ## Contributions:
        ${answersObject.contributions}

    `;
    }

//mock data while developing to avoid repetive input -- appAnswers parameter replaced with mockData
    const mockData = {
        authorName: "thomas",
        title: "DIY Paint N Sip",
        description: "An app that produces artwork and drink ingredients at random for the user. The drink display works by receiving a user's input (the type of alcohol they desire to use) and fetching a random drink's name and ingredients, with instructions for putting it together. The other aspect of the app is simply a generator of random art images from the Metropolitan Museum in New York. If the user desires a new drink or artwork result, they can simply re-click the respective button to receive new content.",
        purpose: "The purpose of this app is to provide users with an entertainment tool that can be enjoyed by groups of people, especially during periods of isolation like the Covid-19 quarantine",
        installInstructions: " This application does not require any additional installation",
        contributions: "developers can contribute to this project by pushing new feature branches and bug reports to the repository. Make sure to provide descriptive commit messages describing what was modified"
    }


//function to pass the questions array into a prompt and retrieve answers from user
const promptQuestions = ()=> {
 inquirer.prompt(questions)
    .then(appAnswers=>{
        console.log(appAnswers.contributions);
       // generatePage(appAnswers);

       fs.writeFile('README.md', generatePage(mockData), err=>{
        if(err){
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




