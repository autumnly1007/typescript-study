{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
    };
    
    // 명세서
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    
    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

	class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {

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
            console.log('filling coffee beans ...');
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine ...');
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

    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }
    
    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {
        }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    amateur.makeCoffee();
    pro.makeCoffee();
}