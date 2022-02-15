{
    // 1. JavaScript 
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // 1. TypeScript
    function tsAdd(num1: number, num2: number): number {
        return num1 + num2;
    }

    // 2. JavaScript
    function jsFetchNum(id) {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // 2. TypeScript
    function tsFetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // 3. Optional parameter - 선택적으로 인자 전달하기
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }

    printName('ahn', 'autumn');
    printName('mary'); // mary, undefined

    // 4. Default parameter - 기본값 셋팅
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage(); // default message

    // 5. Rest parameter - 개수에 상관없이 같은 타입의 데이터를 전달할 때 사용
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2)); // 3 
    console.log(addNumbers(1, 2, 3, 4)); // 10
    console.log(addNumbers(1, 2, 3, 4, 5, 0)); // 15
}