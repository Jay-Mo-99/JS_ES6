class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(this.name + " makes " + this.sound);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof");
    this.breed = breed;
  }
  makeSound() {
    super.makeSound();
    console.log("This is the ", this.breed, "breed");
  }
}

let dog1 = new Dog("Max", "Labrador");
dog1.makeSound();
