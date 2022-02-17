{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
  };
    
  // interface
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
    
  // parent class
	class CoffeeMachine implements CoffeeMaker {

		private static BEANS_GRAMM_PERPSHOT: number = 7; 
		private coffeeBeans: number = 0;

		constructor(coffeeBeans: number) {
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

    // inferface 함수를 구현
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
		}
  }
    
  // child class
  class CaffeLatteMachine extends CoffeeMachine {

    // 자식클래스에서 생성자 함수를 정의할 때
    // 부모클래스 생성자 함수에서 전달받는 인자가 동일하게 있어야함
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans); // 부모클래스 생성자 함수에 전달
    }

    // 자식 클래스만의 함수
    private steamMilk(): void{
      console.log('Steaming some milk ...');
    }

    // 부모 클래스 함수를 overwrite
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // super : 부모 클래스에 있는 것에 접근
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, 'SSSS');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}