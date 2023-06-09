class Shape {
    constructor(){
        this.color = ""
    }
    setColor(color){
        this.color = color;
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" stroke="red" fill= "${this.color}"/>`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="70" y="70" width="160" height="160" stroke="black" fill="${this.color}"/>`
    }
}


// const circle = new Circle();

// circle.setColor("Green");

// var x = circle.render();

// console.log(circle);
// console.log(x);
module.exports = {Square, Triangle, Circle};