{
    // Type Aliases - 새로운 타입을 정의할 수 있음
    type Text = string;
    const name: Text = 'autumn';
    const address: Text = 'korea';

    type Num = number;
    const age: Num = 12;

    type Student = {
        name: string;
        age: number;
    }

    const student: Student = {
        name: 'autumn',
        age: 12,
    }

    // String Literal Types - 문자열로 타입을 정의할 수 있음
    type Name = 'name';
    let myName: Name;
    myName = 'name';

    type JSON = 'json';
    const json: JSON = 'json';
}