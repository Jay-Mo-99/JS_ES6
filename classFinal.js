class Shape {
  static ShapeCount = 0;
  constructor(name) {
    this.name = name;
    Shape.ShapeCount += 1;
  }
  describe() {
    console.log("This is a " + this.name);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  describe() {
    super.describe();
    console.log("It has a radius of " + this.radius);
  }
}

class Square extends Shape {
  constructor(name = "Not Circle", sideLength) {
    super(name);
    this.sideLength = sideLength;
  }
  describe() {
    super.describe();
    console.log("It has a side length of " + this.sideLength);
  }
}

// let circle1 = new Circle(5);
// let circle2 = new Circle(10);
// circle1.describe();
let square1 = new Square(undefined, 4);
square1.describe();
console.log(Shape.ShapeCount); // 1
