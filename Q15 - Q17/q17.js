// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.

const obj1 = {
  name: "Ram",
  power: 2500,
  yuga: "Treta",
};

const obj2 = {
  name: "Krishna",
  power: 2325,
  yuga: "Dwapar",
};

const powerOfChar = 35;

function getPowerfulPerson(person1, person2) {
  return getPower(person1) > getPower(person2) ? person1 : person2;
}

function getPower(person) {
  return person.name.length * powerOfChar + person.power;
}

console.log(getPowerfulPerson(obj1, obj2));
