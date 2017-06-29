import WelcomeView from '../views/welcome-view';
import Application from '../application';
import showScreen from "../show-screen";

class ScreenWelcome {

  init() {
    const view = new WelcomeView();

    view.onStart = () => {
      Application.showGame();
    };

    showScreen(view.element);
  }
}

export default new ScreenWelcome();

