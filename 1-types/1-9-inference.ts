{
    // Type Inference

    // 선언하면서 타입을 생략하면 값에 따라 타입이 정해짐
    let text = 'hello'; // string
    
    // 함수 인자에 타입을 생략하면 any 타입으로 정해짐
    function print(message) { 
        console.log(message);
        
    }

    // 함수 인자도 기본값에 따라 타입이 정해짐
    function printHello(message = 'hello') { // string
        console.log(message);
    }

    // 리턴 타입이 자동으로 추론됨
    function add(x: number, y: number) { // return: number
        return x + y;
    }

    const result = add(1, 2); // number

    // void 는 생략이 가능하지만, 이외에는 최대한 타입을 명시하는 것이 좋음
}