class CreateSvg{
    construct(){
        this.textEl = ""
        this. shapeEl = ""
    }
    render(){
       return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        setText())
        ${this.textEl}
        ${this.shapeEl}
        </svg>`;
    }
    setText(text,color){
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shapeEl = shape.render()
    }
}

module.exports = CreateSvg