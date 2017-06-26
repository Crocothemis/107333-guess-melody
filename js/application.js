import screenWelcome from "./screens/screen-welcome";
import screenGame from './screens/screen-game';
import screenResult from './screens/screen-result';

class Application {

  showWelcome() {
    screenWelcome.init();
  }

  showGame() {
    screenGame.init();
  }

  showResult(data) {
    screenResult.init(data);
  }

}

export default new Application();
