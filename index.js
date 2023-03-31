const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');
const {Square, Circle, Triangle} = require("./lib/shape");
const generatesvg = require('./generatesvg.js');

inquirer.prompt(
    [
{
    type: 'input',
    message: 'Shape color?',
    name: 'shapeColor',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
},
{
    type: 'input',
    message: 'Text color?',
    name: 'textColor',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
},
{
    type: 'input',
    message: '3 letter text?',
    name: 'text',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
},
{
    type: 'list',
    message: 'shape?',
    name: 'shape',
    choices: ['Square','Triangle', 'Circle'],
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
}
]).then(
    function createNewFile(data){
        console.log(data);
    
        generatesvg(data)
    //     console.log(data);
    //     fs.writeFile(`./logo.svg`,data,(err)=>{
    // if(err){
    //     console.log(err)
    // }
    // console.log('your logo has been generated');
    // })
    }
)
