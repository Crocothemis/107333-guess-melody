import getElFromTempl from "./get-el-from-tmpl";
import showScreen from "./show-screen";
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

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;

export const showScreenGenre = () => {

  showScreen(getElFromTempl(templateGenre));

  document.addEventListener(`click`, (e) => {

    if (e.target.closest(`.genre-answer-send`)) {

      e.preventDefault();

      let answers = document.querySelectorAll(`input[name="answer"]`);

      const isAnswer = (arr) => {

        let m = arr.length;

        while (m--) {

          if (arr[m].checked) {

            return true;

          }

        }

        return false;

      };

      if (isAnswer(answers)) {

        const randomFunc = (...functions) => {

          return functions[Math.floor(Math.random() * functions.length)];

        };

        randomFunc(showResultSuccess, showResultFail)();

      }

    }

  });

};

export default showScreenGenre;
