// JavaScript this => 호출하는 문맥에 따라 변경될 수 있음

console.log(this); // Window (글로벌 객체)

function simpleFunc() {
  console.log(this);
}

simpleFunc(); // Window
window.simpleFunc(); // Window

console.clear();

class Counter {
  count = 0;

  /*increase = function () {
    console.log(this);
  };*/
  
  // arrow function 으로 선언하면 bind 를 해주지 않아도
  // 선언될 당시의 문맥, 그 당시 scope 의 this 를 유지할 수 있음
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); // Counter

const caller = counter.increase;
caller(); // undefined

// let, const 로 선언한 변수는 윈도우에 등록되어 있지 않기 때문에
// caller 를 호출하는 것은 그 무엇도 아니게 됨

// Object 와 함수의 관계, this 를 유지하려면 bind 를 해주어야 함
const caller = counter.increase.bind(counter); // Counter

/**
 * 우리가 선언한 함수는 window 객체에 바로 등록됨
 * 하지만 let, const 키워드를 이용해서 변수를 선언하면
 * 선언된 변수는 window 객체에 등록되지 않음
 */
function helloWorld() { console.log("hello!"); }
window.helloWorld(); // hello!

const autumn = 'autumn';
let winter = 'wint';
console.log(window.autumn); // undefined
console.log(window.winter); // undefined

/**
 * local scope 에서 작성한 함수, 변수가 아니라
 * global scope 에서 선언한 것들은 최상위에서 바로 접근이 가능 
 * 함수는 기본적으로 글로벌 객체에 등록됨
 */

// var 키워드는 기본적으로 윈도우에 등록됨
// 호이스팅 문제 (아래에서 선언했지만 위에서 선언되는 것), 재정의가 되는 문제가 있음

class Bob {

}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this => Bob