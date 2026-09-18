const obj = {
  name: "Amy",
  age: 25,
  city: "Toronto",
  class: ["Math", "Science", "English"],
  function() {
    console.log(
      `My name is ${this.name}, 
      I am ${this.age} years old, 
      I live in ${this.city} 
      and I study ${this.class.join(",")}.`,
    );
  },
};

//obj.function();
//암시적 바인딩
//a.b()
//b의 this는 a를 가르킨다
//object, array, class, DOM element, string etc. 모두 사용 가능

// const newSub = "Art";
// const betty = {
//   ...obj,
//   name: "Betty",
//   city: "Ottawa",
//   class: [...obj.class.filter((sub) => sub !== "Math"), newSub],
// }; //객체 복사
// betty.function();
