class Size {
  constructor(width = 60, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

const size = new Size(1);
const point = new Position();
console.log(point.x, point.y);
