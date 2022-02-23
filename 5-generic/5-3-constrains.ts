interface Employee {
    pay(): void;

}

class FullTimeEmployee implements Employee {
    pay() {
        console.log('full time!');
    }
    workFullTime() {
    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log('part time!');
    }
    workPartTime() {
    }
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 리턴 => 나쁜 함수
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

// 제네릭 타입이지만 Employee 를 구현한 타입만 가능
// 제한적인 범위 내에서 제네릭 사용 가능
function pay<T extends Employee>(employee: T): T {
    employee
    return employee;
}

const autumn = new FullTimeEmployee();
const cat = new PartTimeEmployee();
autumn.workFullTime();
cat.workPartTime();

const autumnAfterPay = pay(autumn);
const catAfterPay = pay(cat);

const obj = {
    name: 'autumn',
    age: 20
}

const obj2 = {
    animal: 'cat'
}

console.log(getValue(obj, 'name')); // autumn
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // cat

// keyof : 오브젝트 내부에 있는 키의 타입
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}