const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // true
console.log(x.__proto__); // Object

const array = [];
console.log(array);
console.log(array.__proto__); // array
console.log(array.__proto__.__proto__); // object

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  /*this.makeCoffee = (shots) => {
    console.log('making ...☕');
  };*/
}

// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making ...☕');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);

// prototype
// 자바스크립트에서 객체지향 프로그래밍, 상속, 코드의 재사용을 위해서 사용됨 
latteMachine.makeCoffee(); // 상속 구현