{
    // Type Assertions
    
    function jsStrFunc(): any {
        return 'hello';
    }
    
    const result = jsStrFunc(); // any
    
    // casting 해서 string api 사용가능
    console.log((result as string).length); 
    console.log((<string>result).length); 
    
    function jsNumFunc(): any {
        return 2;
    }
    
    const value = jsNumFunc();
    console.log((result as string).length); // undefined
    
    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // error 발생 후 어플리케이션이 종료됨
    
    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2); // 타입이 확실할 때 사용 (optional 인 ? 와 반대)

    // 타입이 확실할 때 사용 (optional 인 ? 와 반대)
    const otherNumbers = findNumbers()!; // number

    // Element | null 이지만 존재한다는 것을 확실하게 명시하면 button.nodeValue 에 접근가능
    const button = document.querySelector('class')!;
    const node = button.nodeValue;
}