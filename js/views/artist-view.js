import AbstractView from "./abstract-view.js";
import TimerView from '../views/timer-view';
import {initializePlayer} from '../player';

export default class ArtistView extends AbstractView {
  constructor(data, timeLeft) {
    super();
    this._artistData = data;
    this._timeLeft = timeLeft;
    console.log(timeLeft);
  }

  postRender() {
    this._timer = new TimerView(this._timeLeft);
    this.element.querySelector(`.main--level`).insertBefore(this._timer.element, this.element.querySelector(`.main-wrap`));
  }

  updateTimeLeft(timeLeft) {
    this._timer.updateTimeLeft(timeLeft);
  }

  get template() {
    const artistTemplate = (d) =>
      d.answers
        .map((variant, idx) => `
      <div class="main-answer-wrapper" data-correct="${variant.isCorrect}">
          <input class="main-answer-r" type="radio" id="answer-${idx}" name="answer" value="val-${idx}" />
          <label class="main-answer" for="answer-${idx}">
            <img class="main-answer-preview" src="${variant.image.url}" width="${variant.image.width}" height="${variant.image.height}">
            ${variant.title}
          </label>
        </div>`
        )
        .join(``);

    return `<section class="main main--level main--level-artist" id="level-artist">
    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">${this._artistData.question}</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${artistTemplate(this._artistData)}
      </form>
    </div>
  </section>`.trim();
  }

  bind() {
    const playBtn = this.element.querySelector(`.main-list`);

    playBtn.addEventListener(`click`, (e) => {
      const answer = e.target.closest(`.main-answer-wrapper`);
      if (answer) {
        let isCorrect = (answer.dataset.correct === `true`);
        this.onAnswer(isCorrect);
      }
    });

    initializePlayer(this.element.querySelector(`.player-wrapper`), this._artistData.src);
  }

  onAnswer() {
  }

}
