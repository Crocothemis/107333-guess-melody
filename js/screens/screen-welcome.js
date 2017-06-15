import getElFromTempl from "../get-el-from-tmpl";
import showScreen from "../show-screen";
import showScreenArtist from "./screen-artist";
import {windowAnimation} from "../animate";

const templateWelcome = `<section class="main main--welcome" id="welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>`;

export const showScreenWelcome = () => {
  const screenWelcome = getElFromTempl(templateWelcome);

  screenWelcome.querySelector(`.main-play`).addEventListener(`click`, showScreenArtist);
  showScreen(screenWelcome);
};

export default showScreenWelcome;

