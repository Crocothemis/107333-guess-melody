import AbstractView from "./abstract-view.js";
import timeFormat from "../helpers/time-format";

export default class ResultView extends AbstractView {
  constructor(finalState) {
    super();
    this._correctAnswers = finalState.correctAnswers;
    this._time = timeFormat(finalState.totalTime);
    this._result = finalState.gameStatus;
    this._stat = finalState.lowerResult;
  }

  get template() {
    return `
      <section class="main main--result" id="result-fail">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      ${(this._result === `success`) ?
        `
        <h2 class="title">Вы настоящий меломан!</h2>
 <div class="main-stat">За&nbsp;${this._time}<br>вы&nbsp;отгадали ${this._correctAnswers}&nbsp;мелодии</div>
        <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this._stat}%&nbsp;игроков</span>
        `
      : `
        <h2 class="title">Вы проиграли</h2>
        <div class="main-stat">Ничего, вам повезет в следующий раз</div>`}
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>
    `.trim();
  }

  bind() {
    const replay = this.element.querySelector(`.main-replay`);

    replay.addEventListener(`click`, () => {
      this.onRepeat();
    });
  }

  onRepeat() {
  }

}
