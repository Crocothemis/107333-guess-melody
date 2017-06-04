import getElFromTempl from "../get-el-from-tmpl";
import showScreen from "../show-screen";
import showResultSuccess from "./screen-result-success";
import showResultFail from "./screen-result-fail";

const templateGenre = `<section class="main main--level main--level-genre" id="level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
    </form>
  </section>`;

export const showScreenGenre = () => {

  showScreen(getElFromTempl(templateGenre));

  const formGenre = document.querySelector(`.genre`);
  const answers = Array.prototype.slice.call(document.querySelectorAll(`input[name="answer"]`));
  const submitBtn = document.querySelector(`.genre-answer-send`);

  const isAnswer = () => {
    answers.some((el) => el.checked);
  };

  formGenre.addEventListener(`change`, () => {
    if (isAnswer) {
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

};

export default showScreenGenre;
