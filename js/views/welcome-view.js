import AbstractView from "./abstract-view.js";

export default class WelcomeView extends AbstractView {
  get template() {
    return `
      <section class="main main--welcome" id="welcome">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <button class="main-play">Начать игру</button>
        <h2 class="title main-title">Правила игры</h2>
        <p class="text main-text">
          Правила просты&nbsp;— за&nbsp;2 минуты дать
          максимальное количество правильных ответов.<br>
          Удачи!
        </p>
      </section>
    `.trim();
  }

  bind() {
    const playBtn = this.element.querySelector(`.main-play`);
    playBtn.addEventListener(`click`, () => {
      this.onStart();
    });
  }

  onStart() {

  }

}
