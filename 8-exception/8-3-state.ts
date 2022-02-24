{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout'; // string union type 으로 에러 원인 출력
  }

  type SuccessState = {
    result: 'success';
  }

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
    }
  }

  class UserService {

    constructor(private client: NetworkClient) { }
    
    login() {
      this.client.tryConnect();
      // login ...
    }
  }

  class App {
      
    constructor(private userService: UserService) { }
    
    run() {
      try {
        this.userService.login();
      } catch (error) { // any type
        // show dialog to user
        // 어플리케이션 단에서 catch 함으로써 더 의미있는 처리를 할 수 있음
        // 가능한 효과적으로 처리할 수 있는 위치에서 catch 하는 것이 좋음

        // if (error instanceof OfflineError) {
          // catch 로 에러를 잡는 순간 error 는 any 타입이 됨
          // instanceof 키워드 사용이 불가능함
        // }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}