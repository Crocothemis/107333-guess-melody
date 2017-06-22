import WelcomeView from '../views/welcome-view';
import showScreen from "../show-screen";
import showScreenArtist from "./screen-artist";

export default (data, currentState) => {
  const view = new WelcomeView();

  view.onStart = () => {
    showScreenArtist(data, currentState);
  };

  showScreen(view.element);
};
