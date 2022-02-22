{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('Not valid number!');
    }
    return arg;
  }

  // ant 타입을 리턴 - 타입 보장이 되지 않음
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('Not valid number!');
    }
    return arg;
  }

  const result = checkNotNull(123);

  // GENERIC 타입을 리턴 - 전달받은 인자와 같은 타입으로 리턴 - 타입이 보장됨
  function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
      throw new Error('Not valid number!');
    }
    return arg;
  }

  const number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
  
}