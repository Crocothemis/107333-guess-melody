import AbstractView from "./abstract-view.js";
import result from "../data/result";
import timeFormat from "../helpers/time-format";

export default class ResultView extends AbstractView {
  constructor(finalState) {
    super();
    this._correctAnswers = finalState.correctAnswers;
    this._time = timeFormat(finalState.totalTime);
    this._stat = finalState.lowerResult;
    this._result = result[finalState.gameStatus];
  }

  get template() {
    return `<section class="main main--result" id="result-fail">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">${this._result.title}</h2>
   
     ${this._result.stat.comparison ?
      ` <div class="main-stat">За&nbsp;${this._time}<br>вы&nbsp;отгадали ${this._correctAnswers}&nbsp;мелодии</div>
      <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this._stat}%&nbsp;игроков</span>`
      : `<div class="main-stat">${this._result.stat.text}</div>`}
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`.trim();
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
