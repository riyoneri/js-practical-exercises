class Size{
    constructor(width=60, height=60){
        this.width = width
        this.height = height
    }

    resize(width, height) {
        this.width = width
        this.height = height
    }
}

const size = new Size(1);
console.log(size.width)