import GenreView from '../views/genre-view';
import ArtistView from '../views/artist-view';
import getData from '../data/get-data'
import showScreen from "../show-screen";
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
    
    let self = this;

    getData().then(function(v) {

      self.view = getQuestion(v);

      self.view.onAnswer = (correct) => {
        const nextState = countAnswer(state, {correct, time: 12000});

        if (!nextState.gameStatus) {
          self.changeLevel(nextState);
        } else {
          Application.showResult(nextState);
        }

      };
      
    })
    .catch(function(e) {console.log(e)});
    
  }

}

const getQuestion = (json) => {
  
  if (json.type === `artist`) {
    return new ArtistView(json);
  } else if (json.type === `genre`) {
    return new GenreView(json);
  }
 
};

export default new ScreenGame();

