import AbstractView from "./abstract-view.js";
import {initializePlayer} from '../player';

export default class GenreView extends AbstractView {
  constructor(data) {
    super();
    this._genreData = data;
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
    <h2 class="title">${this._genreData.question}</h2>
    <form class="genre">
    ${songsTemplate(this._genreData)}
      <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
    </form>
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

    formGenre.addEventListener(`submit`, (e) => {
      e.preventDefault();

      const correct = [...this.element.querySelectorAll(`input`)].every((input) => {
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
