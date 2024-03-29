{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    const BEANS_GRAMM_PERPSHOT: number = 7;
    let coffeeBeans: number = 0;

    function makeCoffee(shots: number): CoffeeCup {
        if (coffeeBeans < shots * BEANS_GRAMM_PERPSHOT) {
            throw new Error(`Not enough coffee beans!`);
        }
        coffeeBeans -= shots * BEANS_GRAMM_PERPSHOT;
        return {
            shots: shots,
            hasMilk: false
        }
    }

    coffeeBeans += 3 * BEANS_GRAMM_PERPSHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}