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
    name: 'instructions',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
},
{
    type: 'input',
    message: 'Text color?',
    name: 'credit',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
},
{
    type: 'input',
    message: '3 letter text?',
    name: 'usage',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
},
{
    type: 'list',
    message: 'shape?',
    name: 'license',
    choices: ['Square','Triangle', 'Circle'],
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
}
]).then(
    function createNewFile(data){
        fs.writeFile(`./README.svg`,data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('your readme has been generated');
    })
    }
)
class CreateSvg{
    construct(){
        this.textEl = ""
        this. shapeEl = ""
    }
    render(){
        console.log(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        setText())
        ${this.textEl}
        ${this.shapeEl}
        /svg>`);
    }
    setText(text,color){
        this.textEl = `<text x="150" y="125" font-size="60" text-`
    }
    setShape(shape,color){
        this.shapeEl = shape.render()
    }
}
