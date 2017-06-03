import getElFromTempl from "./get-el-from-tmpl";
import showScreen from "./show-screen";
import showScreenWelcome from "./screen-welcome";

const templateSuccess = `<section class="main main--result" id="result-success">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const showResultSuccess = () => {

  showScreen(getElFromTempl(templateSuccess));

  document.querySelector(`.main-replay`).addEventListener(`click`, () => {

    showScreenWelcome();

  });

};

export default showResultSuccess;
