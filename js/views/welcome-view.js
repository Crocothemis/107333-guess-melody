import AbstractView from "./abstract-view.js";

export default class WelcomeView extends AbstractView {
  get template() {
    return `
      <section class="main main--welcome" id="welcome">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <button class="main-play" style="display: none">Начать игру</button>
        <h2 class="title main-title">Правила игры</h2>
        <p class="text main-text">
          Правила просты&nbsp;— за&nbsp;2 минуты дать
          максимальное количество правильных ответов.<br>
          Удачи!
        </p>
      </section>
    `.trim();
  }

  addPlayBtn() {
    this.playBtn.removeAttribute(`style`);
  }

  bind() {
    this.playBtn = this.element.querySelector(`.main-play`);
    this.playBtn.addEventListener(`click`, () => {
      this.onStart();
    });
  }

  onStart() {
  }

}
