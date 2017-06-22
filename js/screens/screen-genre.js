import GenreView from '../views/genre-view';
import showScreen from "../show-screen";
import showResult from "./screen-result";
import result from '../data/result';

export default (data, currentState) => {
  const view = new GenreView(data);

  view.showResult = () => {
    const randomFunc = (...functions) => {
      return functions[Math.floor(Math.random() * functions.length)];
    };

    showResult(result[randomFunc(`success`, `fail`)], currentState);

  };

  showScreen(view.element);
  currentState.genreCount = currentState.genreCount + 1;

};
