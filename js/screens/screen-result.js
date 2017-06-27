import ResultView from '../views/result-view';
import showScreen from "../show-screen";
import Application from "../application.js";
import result from "../data/result";

class ScreenResult {
  constructor() {
  }

  init() {
    const data = result[Application.decodeParams(location.hash.replace(`#`, ``)).gameStatus];
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


