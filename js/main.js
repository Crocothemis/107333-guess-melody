import 'babel-polyfill';
import 'whatwg-fetch';
import Application from "./application.js";

document.addEventListener(`DOMContentLoaded`, () => {
  Application.init();
});
