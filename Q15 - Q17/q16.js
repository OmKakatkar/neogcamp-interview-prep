// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar.
// Write a function which takes two objects and return the person with more power.

let obj1 = {
  name: "Ram",
  power: 2500,
  yuga: "Treta",
};

let obj2 = {
  name: "Krishna",
  power: 2325,
  yuga: "Dwapar",
};

function getPersonWithMorePower(obj1, obj2) {
  if (obj1.power > obj2.power) {
    return obj1.name;
  }
  return obj2.name;
}
