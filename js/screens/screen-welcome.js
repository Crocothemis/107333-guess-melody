import WelcomeView from '../views/welcome-view';
import Application from '../application';
import showScreen from "../show-screen";

class ScreenWelcome {
  constructor() {
  }

  init() {
    const view = new WelcomeView();

    view.onStart = () => {
      // showScreenArtist(data, currentState);
      Application.showGame();
    };

    showScreen(view.element);
  }
}

export default new ScreenWelcome();

