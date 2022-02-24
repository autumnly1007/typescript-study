{
  // [1, 2].map(item => item * item); // [1, 4]
  
  // map type - 재사용성 높음 / 기존의 형태에서 변환 가능
  type Optional<T> = {
    [P in keyof T]?: T[P] // for...in : object 의 key를 하나씩 가져옴
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type Video = {
    title: string;
    author: string;
  };

  // Video 타입을 optional 로 변경한 타입 정의
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  // Animal 타입은 optional 이 되므로 하나만 정의해도 됨
  const animal: Optional<Animal> = {
    name: 'cat'
  }
  animal.name = 'dog';

  const video: ReadOnly<Video> = {
    title: 'the cat',
    author: 'autumn'
  }
  // video.title = ''; // readonly

  /* 하나씩 정의 X => map type 을 이용하여 재사용
  type VideoOptional = {
    title?: string;
    author?: string;
    description?: string;
  };

  type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
    readonly description: string;
  }
  */
  
  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  const obj2: Nullable<Animal> = {
    name: null,
    age: 10
  }

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  // 타입을 다른 타입으로 한 단계 감싸기
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  }
}