import getElFromTempl from "../get-el-from-tmpl";
import showScreen from "../show-screen";
import showScreenWelcome from "./screen-welcome";
import artists from '../data/artists';

export default (data, currentState) =>{

  const templateResut = `<section class="main main--result" id="result-fail">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">${data.title}</h2>
    ${data.stat}
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const screenResult = getElFromTempl(templateResut);

  screenResult.querySelector(`.main-replay`).addEventListener(`click`, () => {
    let newData = artists[currentState.artistCount];
    showScreenWelcome(newData, currentState);
  });

  showScreen(screenResult);

};
