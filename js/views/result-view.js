import AbstractView from "./abstract-view.js";

export default class ResultView extends AbstractView {
  constructor(data) {
    super();
    this._resultData = data;
  }

  get template() {
    return `<section class="main main--result" id="result-fail">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">${this._resultData.title}</h2>
    <div class="main-stat">${this._resultData.stat.text}</div>
     ${this._resultData.stat.comparison ? `<span class="main-comparison">${this._resultData.stat.comparison}</span>` : ``}
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`.trim();
  }

  bind() {
    const replay = this.element.querySelector(`.main-replay`);

    replay.addEventListener(`click`, () => {
      this.onClick();
    });
  }

  onClick() {
  }

}
