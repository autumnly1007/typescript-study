{
    // Enum

    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    // 대부분 enum 은 union 으로 대체해서 사용
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        Monday, // 값을 정의하지 않으면 0 부터 시작
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Monday);
    let day: Days = Days.Saturday;
    day = Days.Tuesday;

    // enum 은 타입이 보장되지 않음
    day = 10;
    console.log(day);

    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Wednesday';
}