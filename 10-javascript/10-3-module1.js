// import 할 경우 이 함수를 디폴트로 export 한다는 것
// 한 파일에서 default 는 하나만 있어야 함
export default function add(a, b) {
  return a + b;
}

export function print() {
  console.log("print ...");
}

export const num = 10;

/**
 * 모듈화를 함으로써 파일들 간 이름이 중복되는 것을 방지
 * 코드를 분리함으로써 모듈성이 높아짐, 모듈 간 재사용성 높아짐
 */