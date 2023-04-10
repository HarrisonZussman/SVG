const { Circle, Triangle, Square } = require('./shape.js');

describe('Shape', () => {
    test('put letter on top of shape with color', () => {
        const expectation = '<circle cx="150" cy="100" r="80" stroke="red" fill= "purple"/>'
        const circle = new Circle();
        circle.setColor("purple");

        const svg = circle.render();
     expect(svg).toEqual(expectation); 
    })
})

describe('Shape', () => {
    test('put letter on top of shape with color', () => {
        const expectation = '<rect x="70" y="70" width="160" height="160" stroke="black" fill="brown"/>'
        const square = new Square();
        square.setColor("brown");

        const svg = square.render();
     expect(svg).toEqual(expectation); 
    })
})

describe('Shape', () => {
    test('put letter on top of shape with color', () => {
        const expectation = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
        const triangle = new Triangle();
        triangle.setColor("blue");

        const svg = triangle.render();
     expect(svg).toEqual(expectation); 
    })
})


// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// // 
// const shape = new Circle();
// shape.setColor("red");
// expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');

// const shape = new Square();
// shape.setColor("brown");
// expect(shape.render()).toEqual('<rect x="70" y="70" width="160" height="160" fill="brown" />');