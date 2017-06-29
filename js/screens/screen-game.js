import GenreView from '../views/genre-view';
import ArtistView from '../views/artist-view';
import showScreen from "../show-screen";
import {countAnswer} from '../helpers/count-answer';
import Application from "../application.js";
import Model from '../model';

const initialState = Object.freeze({
  lives: 3,
  questionsLeft: 10,
  points: 0,
  correctAnswers: 0,
  gameStatus: null
});

class ScreenGame {
  constructor() {
  }

  init(data) {
    this.questionCount = 0;
    this.changeLevel(initialState, data);
  }

  get view() {
    return this._view;
  }

  set view(view) {
    this._view = view;
    showScreen(view.element);
  }

  changeLevel(state, value) {
    const levelTime = Math.floor(Date.now() / 1000);

    this.view = getQuestion((value[this.questionCount]));
    this.questionCount++;
    this.view.onAnswer = (correct) => {
      const time = Math.floor(Date.now() / 1000) - levelTime;
      const nextState = countAnswer(state, {correct, time});

      if (!nextState.gameStatus) {
        this.changeLevel(nextState, value);
      } else {

        const statData = JSON.stringify({
          time: 23,
          answers: nextState.correctAnswers
        });

        Model.sendData(statData).then(() => {
          Application.showResult(nextState);
        });
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

