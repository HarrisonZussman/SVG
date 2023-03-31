const {Square, Circle, Triangle} = require("./lib/shape.js");
const CreateSvg = require("./lib/svg.js")

function generatesvg(userResponse){
    var color = userResponse.shapeColor
    var shape;
    if (userResponse.shape=="Square"){
        shape = new Square()}
        else if (userResponse.shape=="Circle"){
            shape = new Circle()}
            else if (userResponse.shape=="Triangle"){
                shape = new Triangle()
    }
    shape.setColor(color)
    const svg = new CreateSvg()
    svg.setText(userResponse.text,userResponse.textColor)
    svg.setShape(shape)
    return`
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    </svg>`;
}

module.exports = generatesvg;