import GenreView from '../views/genre-view';
import ArtistView from '../views/artist-view';
import artists from '../data/artists';
import genres from '../data/genres';
import showScreen from "../show-screen";
import {countAnswer} from '../helpers/count-answer';
import random from '../helpers/random';
import Application from "../application.js";
import result from "../data/result";

const initialState = Object.freeze({
  lives: 3,
  questionsLeft: 10,
  points: 0,
  gameStatus: null
});

class ScreenGame {
  constructor() {
  }

  init() {
    this.changeLevel(initialState);
  }

  get view() {
    return this._view;
  }

  set view(view) {
    this._view = view;
    showScreen(view.element);
  }

  changeLevel(state) {
    const getView = random(artistFunc, genreFunc);

    this.view = getView();

    this.view.onAnswer = (correct) => {
      const nextState = countAnswer(state, {correct, time: 12000});

      if (!nextState.gameStatus) {
        this.changeLevel(nextState);
      } else {
        Application.showResult(result[nextState.gameStatus]);
      }

    };
  }

}

const artistFunc = () => {
  return new ArtistView(artists[0]);
};

const genreFunc = () => {
  return new GenreView(genres[0]);
};

export default new ScreenGame();

