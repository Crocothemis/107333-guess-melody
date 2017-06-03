const sectionMain = document.querySelector(`.main`);

const showScreen = (screen) => {
  sectionMain.innerHTML = ``;
  sectionMain.appendChild(screen);
};

export default showScreen;
