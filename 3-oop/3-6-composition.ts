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

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("Steaming some milk ...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true
      }
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log('Getting some sugar from candy ...');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar
      }
    }
  }

    
  class CaffeLatteMachine extends CoffeeMachine {

    constructor(beans: number, public readonly serialNumber: string, private milkFrother: CheapMilkSteamer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }
  
  class SweetCoffeeMaker extends CoffeeMachine {

    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      console.log('add sugar ...');
      return this.sugar.addSugar(coffee);
    }
  }

  // 복잡한 상속의 수직구조를 피하기 위해 상속의 레벨을 한 단계로 유지
  // composition 을 이용해서 필요한 기능을 외부에서 주입받아 재사용
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(private beans: number, private milk: CheapMilkSteamer, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee)
      return this.milk.makeMilk(sugarAdded);
    }
  }

  const machines: CoffeeMaker[] = [
    // new CoffeeMachine(16),
    // new CaffeLatteMachine(16, '1'),
    // new SweetCoffeeMaker(16),
    // new CoffeeMachine(16),
    // new CaffeLatteMachine(16, '1'),
    // new SweetCoffeeMaker(16)
  ];

  machines.forEach(machine => {
    console.log('---------------------');
    machine.makeCoffee(1);
  })

}