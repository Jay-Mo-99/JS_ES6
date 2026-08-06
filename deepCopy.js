function deepCopy(param) {
  //If param is primitive or null, return param
  //For error handling: if param is primitive or null, return param as it is already copieed
  //Base case: if param is primitive or null, return param as there is no more depth to copy
  if (typeof param !== "object" || param === null) {
    return param;
  }

  //if param is an array, using the map to iterate all elements and recursively call deepCopy on each element
  if (Array.isArray(param)) {
    return param.map((p) => deepCopy(p));
  }

  //if param is an object,
  //using for ... in loop to iterate all keys
  //recursively call deepCopy on each value and assign it to newObj

  let newObj = {};
  if (typeof param === "object") {
    for (let key in param) {
      newObj[key] = deepCopy(param[key]);
    }
  }
  return newObj;
}

//Test case
let o = { a: 1, b: { c: 2 } };
console.log(deepCopy(o));
