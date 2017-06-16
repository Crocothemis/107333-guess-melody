import getElFromTempl from "../get-el-from-tmpl";
import showScreen from "../show-screen";
import {initializePlayer} from '../player';
import showScreenGenre from "./screen-genre";
import genres from '../data/genres';

export default (data, currentState) => {

  const templateArtist = `<section class="main main--level main--level-artist" id="level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">02</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1" />
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" src="${data.answer1.img}">
            ${data.answer1.name}
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />
          <label class="main-answer" for="answer-2">
            <img class="main-answer-preview" src="${data.answer2.img}">
            ${data.answer2.name}
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />
          <label class="main-answer" for="answer-2">
            <img class="main-answer-preview" src="${data.answer3.img}">
            ${data.answer3.name}
          </label>
        </div>
      </form>
    </div>
  </section>`;

  const screenArtist = getElFromTempl(templateArtist);

  screenArtist.querySelector(`.main-list`).addEventListener(`click`, (e) => {
    if (e.target.closest(`.main-answer-wrapper`)) {

      let genre = genres[currentState.genreCount];
      showScreenGenre(genre, currentState);
    }

  });
  initializePlayer(screenArtist.querySelector(`.player-wrapper`), data.url);
  showScreen(screenArtist);
  currentState.artistCount = currentState.artistCount + 1;

};
