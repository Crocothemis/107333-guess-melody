import WelcomeView from '../views/welcome-view';
import Application from '../application';
import showScreen from "../show-screen";

class ScreenWelcome {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    this.view.onStart = () => {
      Application.showGame();
    };

    showScreen(this.view.element);
  }
}

export default new ScreenWelcome();

