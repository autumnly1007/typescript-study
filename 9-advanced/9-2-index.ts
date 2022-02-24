{
  const obj = {
    name: 'autumn'
  }

  obj.name; // autumn
  obj['name']; // autumn

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  }

  type Name = Animal['name']; // string type
  const text: Name = 'hello'; // string

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'name';

  type Person = {
    name: string;
    gender: Animal['gender'];
  }

  const person: Person = {
    name: 'autumn',
    gender: 'female'
  }
}