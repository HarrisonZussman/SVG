class CreateSvg{
    construct(){
        this. shapeEl = ""
        this.textEl = ""
    }
    render(){
       return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        setText())
        ${this.shapeEl}
        ${this.textEl}
        </svg>`;
    }
    setShape(shape){
        this.shapeEl = shape.render()
    }
    setText(text,color){
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
}

module.exports = CreateSvg