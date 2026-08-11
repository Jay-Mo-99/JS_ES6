Array.prototype.remove3 = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === 3) {
      this.splice(i, 1); //splice() can edit the original directly
      i--; //Adjust index after removal to avoid skipping elements
    }
  }
  return this;
};

Array.prototype.remove33 = function (target) {
  let newArr = [];
  this.forEach((e) => {
    if (e !== target) {
      newArr.push(e);
    }
  });
  return newArr;
};

let arr = [1, 2, 3, 4];
//arr.remove3();
arr.remove33(3);
console.log(arr); // [1, 2, 4]

l; //et arr2 = [3, 3, 3, 3, 5, 3, 3, 3];
//arr2.remove3();
//console.log(arr2); // [5] 가 나와야 함 (3이 전부 제거)
