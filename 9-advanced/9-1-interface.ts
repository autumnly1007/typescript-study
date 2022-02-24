// Type VS Interface
// Interface - 어떤 것을 구현할 목적으로 만드는 것 / Objecta 간의 의사소통을 위해 특정한 규격을 정해놓는 것
// Type - 데이터를 담을 목적으로 만드는 것 / Data 의 Type 을 정해놓는 것

type PositionType = {
  x: number;
  y: number;
}

interface PositionInterface {
  x: number;
  y: number;
}

// 추가 정의
interface PositionInterface {
  z: number;
}



// Object ⭐
const obj1: PositionType = {
  x: 1,
  y: 1
};

// 추가로 정의한것 까지 포함 (merge)
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1
};



// Class ⭐
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}



// Extends
interface ZPosotionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number }; // Extends using intersection


// only interfaces can be merged.
interface PositionInterface {
  z: number;
}

// type 은 중복 불가능
/* type PositionType {

} */

// Type aliases can use computed properties
type Person = {
  name: string,
  age: Number
}

type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right';
// union type 은 interface 로 구현 불가능