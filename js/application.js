import screenWelcome from "./screens/screen-welcome";
import screenGame from './screens/screen-game';
import screenResult from './screens/screen-result';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

const getComtrollerFromHash = (hash) => hash.replace(`#`, ``);

class Application {

  constructor() {
    this.routes = {
      [ControllerID.WELCOME]: screenWelcome,
      [ControllerID.GAME]: screenGame,
      [ControllerID.RESULT]: screenResult
    };

    window.onhashchange = () => {
      this.changeController(getComtrollerFromHash(location.hash));
    };
  }

  changeController(route = ``) {
    this.routes[route].init();
  }

  init() {
    this.changeController(getComtrollerFromHash(location.hash));
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showResult() {
    location.hash = ControllerID.RESULT;
  }

}

export default new Application();
