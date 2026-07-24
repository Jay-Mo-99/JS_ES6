console.log(test2); //ReferenceError: test2 is not defined
console.log(test);
console.log(multiplyAB);

function multiplyAB(a, b) {
  return a * b;
}
var test = "Test"; //underined

//let test = "Test";
//ReferenceError: Cannot access 'test' before initialization
//const test = "Test";
//ReferenceError: Cannot access 'test' before initialization
