interface Either<L, R> {
    left: () => L;
    right: () => R;
}

// Item 의 I, Value 의 V 로 많이 사용
class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) { }
    
    left(): L {
        return this.leftValue;
    }

    right(): R {
        return this.rightValue;
    }
}

const either: Either<number, number> = new SimpleEither(2, 3);
either.left(); // 2
either.right(); // 3

const best = new SimpleEither({name: 'autumn'}, 'hello');