{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
    };
    
    // 명세서
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

	class CoffeeMachine implements CoffeeMaker {

		private static BEANS_GRAMM_PERPSHOT: number = 7; 
		private coffeeBeans: number = 0;

		private constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans);
        }
        
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number) {
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PERPSHOT) {
                throw new Error('Not enough coffee beans!');
            }
            console.log(`grinding beans for ${shots} ...`);
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PERPSHOT;
        }

        private preheat(): void {
            console.log('heating up...');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots ...`);
            return {
                shots: shots,
                hasMilk: false
            }
        }

        // interface 에 명세된 함수를 반드시 구현해야 함
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
		}
	}

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(32);
    
    // 외부에서 호출 순서를 알지 못해도 원하는 동작을 할 수 있음 (정말 필요한 함수만 노출시킴) 
    // 캡슐화를 통해 추상화를 구현
    maker.makeCoffee(2);
    
    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(32); 호출 불가능
    maker2.makeCoffee(32);
}