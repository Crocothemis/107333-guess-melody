import GenreView from '../views/genre-view';
import ArtistView from '../views/artist-view';
import showScreen from "../show-screen";
import {countAnswer} from '../helpers/count-answer';
import {statSort, getLowerResultPlayers} from '../helpers/stats';
import Application from "../application.js";
import Model from '../model';

const initialState = Object.freeze({
  lives: 3,
  questionsLeft: 10,
  points: 0,
  correctAnswers: 0,
  totalTime: 0,
  lowerResult: 0,
  gameStatus: null
});

class ScreenGame {
  constructor() {
  }

  init(data) {
    this.questionCount = 0;
    this.startGame(120);
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
    this.view = getQuestion((value[this.questionCount]), this.timeLeft);

    this.questionCount++;
    this.view.onAnswer = (correct) => {
      const time = Math.floor(Date.now() / 1000) - levelTime;
      const nextState = countAnswer(state, {correct, time});

      if (!nextState.gameStatus) {
        this.changeLevel(nextState, value);
      } else {
        const statData = JSON.stringify({
          time: nextState.totalTime,
          points: nextState.points
        });

        this.timerStop();

        Model.sendData(statData)
          .then(() => Model.getStat())
          .then((allStat) => {
            nextState.lowerResult = Math.floor((getLowerResultPlayers.length / statSort(allStat).length) * 100);
            Application.showResult(nextState);
          });
      }
    };
  }

  startGame(timeLeft) {
    this.timeLeft = timeLeft;
    this.timerUpdate = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        Application.showResult({gameStatus: `fail`});
        this.timerStop();
      }
      this.view.updateTimeLeft(this.timeLeft);
    }, 1000);
  }

  timerStop() {
    clearInterval(this.timerUpdate);
  }
}

const getQuestion = (json, screenTimePoint) => {
  if (json.type === `artist`) {
    return new ArtistView(json, screenTimePoint);
  }
  return new GenreView(json, screenTimePoint);
};

export default new ScreenGame();

