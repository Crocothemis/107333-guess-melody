import ResultView from '../views/result-view';
import showScreen from "../show-screen";
import Application from "../application.js";

class ScreenResult {
  constructor() {
  }

  init(finalState) {
    const view = new ResultView(finalState);

    view.onRepeat = () => {
      Application.showWelcome();
    };
    showScreen(view.element);
  }
}

export default new ScreenResult();


