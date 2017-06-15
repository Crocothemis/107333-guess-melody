import getElFromTempl from "../get-el-from-tmpl";
import showScreen from "../show-screen";
import showResultSuccess from "./screen-result-success";
import showResultFail from "./screen-result-fail";
import genres from '../data/genres';
import {initializePlayer} from '../player';
import initialState from '../data/initial-data';

const templateGenre = (data) => `<section class="main main--level main--level-genre" id="level-genre">
    <h2 class="title">Выберите  ${data.title} треки</h2>
    <form class="genre">
  
  ${[...Object.entries(data.songs)].map(([song]) =>
  ` <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-${song}" id="a-${song}">
        <label class="genre-answer-check" for="a-${song}"></label>
      </div>`).join(``)}
  
  
  
      <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
    </form>
  </section>`;
let genreCount;

if (typeof artistCount === `undefined`) {
  genreCount = initialState.genreCount;
}

let data = genres[genreCount];

export const showScreenGenre = () => {

  const screenGenre = getElFromTempl(templateGenre(data));
  const formGenre = screenGenre.querySelector(`.genre`);
  const answers = Array.prototype.slice.call(screenGenre.querySelectorAll(`input[name="answer"]`));
  const submitBtn = screenGenre.querySelector(`.genre-answer-send`);

  const isAnswer = () => {
    return answers.some((el) => el.checked);
  };

  formGenre.addEventListener(`change`, () => {
    if (isAnswer()) {
      submitBtn.removeAttribute(`disabled`);
    } else {
      submitBtn.setAttribute(`disabled`, `disabled`);
    }
  });

  formGenre.addEventListener(`submit`, (e) => {
    e.preventDefault();
    randomFunc(showResultSuccess, showResultFail)();
  });

  const randomFunc = (...functions) => {
    return functions[Math.floor(Math.random() * functions.length)];
  };

  for (let it = 0; it < screenGenre.querySelectorAll(`.player-wrapper`).length; it++) {
    initializePlayer( screenGenre.querySelectorAll(`.player-wrapper`)[it], data.songs[it][`url`]);
  }

  showScreen(screenGenre);
};

export default showScreenGenre;
