import getElFromTempl from "../get-el-from-tmpl";
import showScreen from "../show-screen";
import showResult from "./screen-result";
import {initializePlayer} from '../player';
import result from '../data/result';


const songsTemplate = (d) =>
  d.songs
    .map((song, idx) => `
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-${idx}" id="a-${idx}">
        <label class="genre-answer-check" for="a-${idx}"></label>
      </div>`
    )
    .join(``);

export default (data, currentState) => {

  const templateGenre = `<section class="main main--level main--level-genre" id="level-genre">
    <h2 class="title">Выберите  ${data.title} треки</h2>
    <form class="genre">
    ${songsTemplate(data)}
      <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
    </form>
  </section>`;

  const screenGenre = getElFromTempl(templateGenre);
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
    showResult(result[randomFunc(`success`, `fail`)], currentState);
  });

  const randomFunc = (...functions) => {
    return functions[Math.floor(Math.random() * functions.length)];
  };

  for (let it = 0; it < screenGenre.querySelectorAll(`.player-wrapper`).length; it++) {
    initializePlayer(screenGenre.querySelectorAll(`.player-wrapper`)[it], data.songs[it][`url`]);
  }

  showScreen(screenGenre);
  currentState.genreCount = currentState.genreCount + 1;

};
