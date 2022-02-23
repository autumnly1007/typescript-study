{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  }

  class StackImpl<T> implements Stack<T> {

    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {
    }

    get size() {
      return this._size;
    }

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      const node = { value, next: this.head } // 타입 추론 가능
      this.head = node;
      this._size++;
    }

    pop(): T {

      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(5);
  stack.push('Autumn 1');
  stack.push('Summer 2');
  stack.push('Winter 3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
  
  const stack2 = new StackImpl<number>(5);
  stack2.push(123);
  stack2.push(234);
  stack2.push(345);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
  
  // 재사용될 가능성이 있다면 제네릭을 이용해서 다양한 타입을 받을 수 있도록 구현하는 것이 좋음

}
