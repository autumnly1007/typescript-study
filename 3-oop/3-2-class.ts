{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	class CoffeeMaker {

		static BEANS_GRAMM_PERPSHOT: number = 7; // static : class level - 오브젝트 마다 생성되지 않음
		coffeeBeans: number = 0; // instance (object) level

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		makeCoffee(shots: number): CoffeeCup {
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PERPSHOT) { // static 이기 때문에 this 사용 X
				throw new Error(`Not enough coffee beans!`);
			}
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PERPSHOT;
			return {
				shots: shots,
				hasMilk: false
			}
		}
	}

	const maker = new CoffeeMaker(32);
	console.log(maker);
	const maker2 = new CoffeeMaker(14);
	console.log(maker2);

	// static 함수이기 때문에 object 를 생성하지 않아도 바로 접근 가능 (ex. Math.abs)
	const maker3 = CoffeeMaker.makeMachine(10);
}