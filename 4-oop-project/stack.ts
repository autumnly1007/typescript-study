{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;

    // next: StackNode | undefined;
    // 최신 ts 에서는 아래처럼 optional 로 간단하게 표기

    readonly next?: StackNode;
  }

  class StackImpl implements Stack {

    // 변수명 앞에 underscore 사용
    // 내부에서만 사용됨
    // 동일한 이름의 public 함수가 있다는 것을 의미함
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {
  
    }

    // 외부에서 사용됨
    get size() {
      return this._size;
    }

    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      const node: StackNode = { value, next: this.head }
      this.head = node;
      this._size++;
    }

    pop(): string {

      if (this.head == null) { // null == undefined, null !== undefined
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(5);
  stack.push('Autumn 1');
  stack.push('Summer 2');
  stack.push('Winter 3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
  
  // stack.pop();
}
