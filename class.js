class Car {
  constructor(brand = "Hyundai", honk) {
    this.brand = brand;
    this.honk = function () {
      console.log("Beep: " + this.brand + " Beep!");
    };
  }
  //Instance properties and methods
  //Adding a method to the prototype of Car class
  drive() {
    console.log(this.brand + "is driving");
  }
  //Static properties and methods
  //Adding static properties and methods to the Car class
  //Not related with the instance of Car and can be accessed directly from the class itself.
  static isOpened = false;
  static open() {
    Car.isOpened = !Car.isOpened;
  }
}

//Instance properties and methods
Car.prototype.stop = function () {
  console.log("Stopped");
};

//Static propertis and methods
Car.wheels = 4;
Car.factory = function () {
  console.log("From Factorty");
};

let car1 = new Car("Tesla");
car1.honk();
car1.drive();
car1.stop();
console.log(car1.wheels);
console.log(car1.hasOwnProperty("honk")); //true, because honk is defined in the constructor so the instance can get it.
console.log(car1.hasOwnProperty("stop")); //false, because stop is defined in the prototype so the instance cannot get it.
Car.factory();
