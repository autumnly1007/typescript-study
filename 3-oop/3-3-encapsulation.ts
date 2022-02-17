{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

    // public (default) - 외부에서 접근 가능
    // private          - 외부에서 접근 불가능
    // protected        - 상속받은 자식클래스만 접근 가능
	class CoffeeMaker {

        // private - 외부에서 접근 불가
		private static BEANS_GRAMM_PERPSHOT: number = 7; 
		private coffeeBeans: number = 0;

        // 생성자를 private 으로 만들어서 항상 static 함수만 사용하도록 함
		private constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
        }
        
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

		makeCoffee(shots: number): CoffeeCup {
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PERPSHOT) {
				throw new Error(`Not enough coffee beans!`);
			}
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PERPSHOT;
			return {
				shots: shots,
				hasMilk: false
			}
		}
	}

    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);

    class User {

        // 생성자 함수에 들어오는 인자에 접근제어자를 작성하면 바로 멤버변수로 설정됨
        constructor(private firstName: string, public lastName: string) {
        }

        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        private internalAge = 4;

        // getter
        get age(): number {
            return this.internalAge;
        }
        
        // setter
        set age(num: number) {
            // validate
            if (num < 0) {

            }
            this.internalAge = num;
        }
    }

    const user = new User('autumn', 'ahn');
    user.age = 6;
    console.log(user.fullName);
}