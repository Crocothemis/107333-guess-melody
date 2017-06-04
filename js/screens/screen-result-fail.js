import getElFromTempl from "../get-el-from-tmpl";
import showScreen from "../show-screen";
import showScreenWelcome from "./screen-welcome";

const templateFail =`<section class="main main--result" id="result-fail">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const showResultFail = () => {

  showScreen(getElFromTempl(templateFail));

  document.querySelector(`.main-replay`).addEventListener(`click`, () => {

    showScreenWelcome();

  });

};

export default showResultFail;
