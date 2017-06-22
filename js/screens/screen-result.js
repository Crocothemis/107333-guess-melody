import ResultView from '../views/result-view';
import showScreen from "../show-screen";
import showScreenWelcome from "./screen-welcome";
import artists from '../data/artists';

export default (data, currentState) => {
  const view = new ResultView(data);

  view.onClick = () => {
    let newData = artists[currentState.artistCount];
    showScreenWelcome(newData, currentState);
  };

  showScreen(view.element);

};
