{
    // 1. number 
    const num: number = -6;

    // 2. string
    const str: string = 'hello';

    // 3. boolean
    const bool: boolean = false;

    // 4. undefined
    let name: undefined // 이렇게 사용하지 않음
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return undefined;
    }

    // 5. null
    let person: null; // 이렇게 사용하지 않음
    let person2: string | null;

    // 6. unknown - 가능하면 사용하지 않는 것이 좋음
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;
    
    // 7. any - 가능하면 사용하지 않는 것이 좋음
    let anything: any = 0;
    anything = 'hello';

    // 8. void - 생략가능
    function print(): void {
        console.log('hello');
        return;
    }

    // undefined 만 할당 가능 - 이렇게 사용하지 않음
    let unusable: void = undefined; 

    // 9. never - 함수에서 리턴하지 않는 경우 명시적으로 사용 
    function throwError(message: string): never {

        // message -> server (log)
        throw new Error(message); // 에러를 던지는 경우
        
        /* while (true) {} // 반복문에서 리턴하지 않는 경우 */
    }
    
    let neverEnding: never; // 이렇게 사용하지 않음

    // object - 원시타입을 제외한 모든 object type 할당 가능
    // 어떤 타입의 오브젝트인지 명시하는 것이 좋음
    let obj: object;
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({ name: 'autumn' });
    acceptSomeObject({ animal: 'cat' });
}