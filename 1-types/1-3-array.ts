{
    // 1. Array
    const fruits: string[] = ['apple', 'banana'];
    const scores: Array<number> = [1, 3, 4];

    // readonly - object 의 불변성 보장
    function printArray(fruits: readonly string[]) { }
    
    // 2. Tuple - 고정된 사이즈, 서로 다른 타입
    // Tuple 보다는 interface, type alias, class 로 대체해서 사용하는 것이 좋음
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123 - 인덱스로 접근하면 가독성이 떻어짐

    // object destructuring
    const [name, age] = student;

    // tuple 을 잘 사용한 예 - 리액트
    // const [value, setValue] = useState(); => 서로 다른 타입을 동적으로 리턴하는 경우
}