import ResultView from '../views/result-view';
import showScreen from "../show-screen";
import Application from "../application.js";

class ScreenResult {
  constructor() {
  }

  init(data) {
    const view = new ResultView(data);

    view.onRepeat = () => {
      // let newData = artists[currentState.artistCount];
      // showScreenWelcome(newData, currentState);
      Application.showWelcome();
    };
    showScreen(view.element);
  }
}

export default new ScreenResult();


