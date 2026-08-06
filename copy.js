function deepCopy(obj) {
  //Error handling: 원시값이거나 null이면 대입으로도 이미 복사 완료. 그냥 그대로 return해준다
  //Basecase: 만약 2-dept 이상의 element를 재귀할떄, 그게 원시값이나 null이면 이미 더이상 복사할 depth가 없다. 그러니 return한다.
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  //Array.isArray()를 이용하여 배열인지 확인하고, 배열이면 map을 이용하여 각 element를 재귀적으로 deepCopy한다.

  if (Array.isArray(obj)) {
    return obj.map((o) => deepCopy(o));
  }

  //Object라면 for..in loop로 각 key를 순회하고
  //newObj[key] deepCopy(obj[key])를 이용하여 재귀적으로 copy한다.
  //basecase에 의해 원시값이거나 null일떄 return되어 그 루프로 돌아오고 결국은 원본의 depth를 가진 새 newObj를 return한다
  if (typeof obj === "object") {
    let newObj = {};
    for (let key in obj) {
      newObj[key] = deepCopy(obj[key]);
    }
    return newObj;
  }
}
let o = { a: 1, b: { c: 2 } };
console.log(deepCopy(o));
