import WelcomeView from '../views/welcome-view';
import Application from '../application';
import showScreen from "../show-screen";

class ScreenWelcome {
  get view() {
    return this._view;
  }

  set view(view) {
    this._view = view;
  }

  init() {
    this.view = new WelcomeView();

    this.view.onStart = () => {
      Application.showGame();
    };

    showScreen(this.view.element);
  }

  addPlayBtn() {
    this.view.addPlayBtn();
  }
}

export default new ScreenWelcome();

