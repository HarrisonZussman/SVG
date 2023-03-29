const {Square, Circle, Triangle} = require("./lib/shape.js");

function generatesvg(userResponse){
    var color = `'${userResponse.shapeColor}'`
    var shape
    if (userResponse.shapeLogo=="Square"){
        shape = new Square(color)}
        else if (userResponse.shapeLogo=="Circle"){
            shape = new Circle(color)}
            else if (userResponse.shapeLogo=="Triangle"){
                shape = new Triangle(color)
    }
    return`
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    </svg>`;
}

module.exports = generatesvg;