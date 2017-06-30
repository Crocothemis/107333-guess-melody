import ResultView from '../views/result-view';
import showScreen from "../show-screen";
import Application from "../application.js";

class ScreenResult {
  constructor() {
  }

  init(finalState) {
    // const finalState = Application.decodeParams(location.hash.replace(`#`, ``).split(`?`)[1]);
    const view = new ResultView(finalState);

    view.onRepeat = () => {
      Application.showWelcome();
    };
    showScreen(view.element);
  }
}

export default new ScreenResult();


