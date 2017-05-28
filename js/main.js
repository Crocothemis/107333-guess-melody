document.addEventListener(`DOMContentLoaded`, () => {

  const sectionMain = document.querySelector(`.main`);
  const templates = document.querySelector(`#templates`);
  const screenGenre = templates.content.querySelector(`.main--level-genre`);
  const screenResult = templates.content.querySelector(`.main--result`);
  const screenArtist = templates.content.querySelector(`.main--level-artist`);
  const screenWelcome = templates.content.querySelector(`.main--welcome`);
  const screens = [screenWelcome, screenArtist, screenGenre, screenResult];
  let currentScreen = 0;

  const showScreen = (screen) => {
    if (!screens[screen]) {
      return;
    }
    sectionMain.innerHTML = ``;
    sectionMain.appendChild(screens[screen]);
    currentScreen = screen;
  };

  showScreen(currentScreen);

  const switchScreens = (e) => {
    if (e.altKey) {

      if (event.keyCode === 37) {
        showScreen(currentScreen - 1);
      }

      if (event.keyCode === 39) {
        showScreen(currentScreen + 1);
      }
    }
  };

  document.addEventListener(`keyup`, switchScreens);

});
