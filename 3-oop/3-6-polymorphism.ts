{
	type CoffeeCup = {
		shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };
    
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
    
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
    
  class CaffeLatteMachine extends CoffeeMachine {

    constructor(beans: number, public readonly serialNumber: string) {
      super(beans); 
    }

    private steamMilk(): void{
      console.log('Steaming some milk ...');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }
  
  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      console.log('add sugar ...');
      return {
        ...coffee,
        hasSugar: true
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16)
  ];

  machines.forEach(machine => {
    console.log('---------------------');
    machine.makeCoffee(1);
  })

}