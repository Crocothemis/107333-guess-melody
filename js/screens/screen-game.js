import GenreView from '../views/genre-view';
import ArtistView from '../views/artist-view';
import getData from '../data/get-data';
import showScreen from "../show-screen";
import {random} from '../helpers/random';
import {countAnswer} from '../helpers/count-answer';
import Application from "../application.js";

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
    getData.then((value) => {
      this.changeLevel(initialState, value);
    }).catch(function (e) {});
  }

  get view() {
    return this._view;
  }

  set view(view) {
    this._view = view;
    showScreen(view.element);
  }

  changeLevel(state, v) {

    this.view = getQuestion(random(v));

    this.view.onAnswer = (correct) => {
      const nextState = countAnswer(state, {correct, time: 12000});

      if (!nextState.gameStatus) {
        this.changeLevel(nextState, v);
      } else {
        Application.showResult(nextState);
      }

    };
  }

}

const getQuestion = (json) => {

  if (json.type === `artist`) {
    return new ArtistView(json);
  }
  return new GenreView(json);
};

export default new ScreenGame();

