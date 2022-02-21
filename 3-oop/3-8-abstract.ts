{
	type CoffeeCup = {
		shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };
    
  // interface
  // 속성, 타입만 정의해 놓음
  // 내부에서 구현 불가능
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
    
  // abstract class
  // 이 클래스 자체로는 object 를 만들 수 없음
  // 내부에서 공통적으로 필요한 로직들 구현 가능
  // 자식클래스마다 달라지는 로직들은 추상메소드로 만들어놓음 (구현 불가능)
	abstract class CoffeeMachine implements CoffeeMaker {

		private static BEANS_GRAMM_PERPSHOT: number = 7; 
		private coffeeBeans: number = 0;

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
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

    // 자식 클래스들이 접근해서 구현을 해야하기 때문에 protected 접근제어자 사용
    // 내용은 자식 클래스에서 구현
    protected abstract extract(shots: number): CoffeeCup;

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

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true
      }
    }
  }
  
  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true
      }
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16)
  ];

  machines.forEach(machine => {
    console.log('---------------------');
    machine.makeCoffee(1);
  })

}