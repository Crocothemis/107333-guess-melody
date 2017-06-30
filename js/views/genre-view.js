import AbstractView from "./abstract-view.js";
import TimerView from '../views/timer-view';
import {initializePlayer} from '../player';

export default class GenreView extends AbstractView {
  constructor(data) {
    super();
    this._genreData = data;
  }

  postRender() {
    this._timer = new TimerView();
    this.element.querySelector(`.main--level`).insertBefore(this._timer.element, this.element.querySelector(`.main-wrap`));
  }

  updateTimeLeft(timeLeft) {
    this._timer.updateTimeLeft(timeLeft);
  }

  get template() {

    const songsTemplate = (d) =>
      d.answers
        .map((song, idx) => `
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" data-genre="${song.genre}" name="answer" value="answer-${idx}" id="a-${idx}">
        <label class="genre-answer-check" for="a-${idx}"></label>
      </div>`
        )
        .join(``);

    return `<section class="main main--level main--level-genre" id="level-genre">
     
    <div class="main-wrap">
      <div class="main-timer"></div>
      
      <h2 class="title">${this._genreData.question}</h2>
      <form class="genre">
      ${songsTemplate(this._genreData)}
        <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
      </form>
    </div>
  </section>`.trim();
  }

  bind() {
    const formGenre = this.element.querySelector(`.genre`);
    const answers = Array.prototype.slice.call(this.element.querySelectorAll(`input[name="answer"]`));
    const submitBtn = this.element.querySelector(`.genre-answer-send`);

    const isAnswer = () => {
      return answers.some((el) => el.checked);
    };

    formGenre.addEventListener(`change`, () => {
      if (isAnswer()) {
        submitBtn.removeAttribute(`disabled`);
      } else {
        submitBtn.setAttribute(`disabled`, `disabled`);
      }
    });

    const inputs = [...this.element.querySelectorAll(`input`)];

    formGenre.addEventListener(`submit`, (e) => {
      e.preventDefault();
      const correct = inputs.every((input) => {
        if (input.dataset.genre === this._genreData.genre) {
          return input.checked;
        } else {
          return !input.checked;
        }
      });
      this.onAnswer(correct);

    });

    [...this.element.querySelectorAll(`.player-wrapper`)].forEach((elem, i) => {
      initializePlayer(elem, this._genreData.answers[i][`src`]);
    });

  }

  onAnswer() {
  }

}
