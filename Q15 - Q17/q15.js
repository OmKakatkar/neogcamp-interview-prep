// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar.
//  Write a function which takes two objects and return the person with more age.

let obj1 = {
  name: "Ram",
  age: "25",
  yuga: "Treta",
};

let obj2 = {
  name: "Krishna",
  age: "31",
  yuga: "Dwapar",
};

function getLargestAge(obj1, obj2) {
  if (obj1.age > obj2.age) {
    return obj1.name;
  }
  return obj2.name;
}

console.log(getLargestAge(obj1, obj2));
