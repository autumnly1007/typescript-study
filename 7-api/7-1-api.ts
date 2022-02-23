import { allowedNodeEnvironmentFlags } from 'process';

Array;

[1, 2].map;

type Student = {
    passed: boolean;
};

const students: Student[] = [{ passed: true }, { passed: true }, { passed: true }];

// 배열 안의 모든 요소가 true 일 경우에만 true 리턴
const result = students.every(student => {
    return student.passed;
});

console.log(result);

class Animal { }
class Cat extends Animal {
    isCat: boolean = true;
}
class Dog extends Animal {
    isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat, new Dog()];

// callback
function isCat(animal: Animal): animal is Cat { // param is Type => 사용자 정의 type guard. 인자의 타입을 명시
    return (animal as Cat).isCat !== undefined; // isCat 이 있다면 => Cat 이라면
}

// 배열 안의 모든 요소의 타입이 Cat 일 경우에만 true 리턴
animals.every<Cat>(isCat);