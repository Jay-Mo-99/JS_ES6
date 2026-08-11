// class BankAccount {
//   static bankName = "Royal Bank Canada";
//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance = balance;
//   }
//   get getBalance() {
//     return this.balance;
//   }
//   get info() {
//     return `Owner: ${this.owner}, Balance: ${this.balance}`;
//   }
//   set deposit(amount) {
//     if (amount <= 0) {
//       throw new Error("Deposit amount must be positive");
//     } else {
//       this.balance += amount;
//     }
//   }
// }

// class SavingsAccount extends BankAccount {
//   constructor(owner, balance, interestRate) {
//     super(owner, balance);
//     this.interestRate = interestRate;
//   }
//   addInterest() {
//     const interestAmount = this.balance * this.interestRate;
//     this.depost = interestAmount;
//   }
// }

// let acc1 = new SavingsAccount("John Doe", 1000, 0.05);
// acc1.addInterest();
// console.log(acc1.info); // Owner: John Doe, Balance: 1000
// acc1.addInterest();
// console.log(acc1.info); // Owner: John Doe, Balance: 1050

// class Parents {
//   constructor(name, age) {
//     this.name = name;
//     this._age = age;
//   }

//   get age() {
//     return this._age;
//   }
//   set age(newAge) {
//     if (newAge < 0) {
//       throw new Error("Age cannot be negative");
//     }
//     this._age = newAge;
//   }
//   newName(str) {
//     this.name = str;
//     return this.name;
//   }
// }

// let parents1 = new Parents("John", 40);
// parents1.age = 50;
// console.log(parents1.age); // 50
// parents1.newName("Mike");
// console.log()

class Shape {
  static shapeCount = 0;
  constructor(name) {
    this.name = name;
    Shape.shapeCount += 1;
  }
  get description() {
    return `This is a ${this.name}`;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }
  set radius(newRadius) {
    if (typeof newRadius !== "number" || newRadius <= 0) {
      throw new Error("Positive number can be a radius");
    }
    this._radius = newRadius;
  }
  get area() {
    return this._radius * this._radius;
  }
}

let circle1 = new Circle("circle", 5);
let circle2 = new Circle("oval", 7);

console.log(circle2.description);
