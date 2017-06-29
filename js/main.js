import Application from "./application.js";
import getData from './data/get-data';

document.addEventListener(`DOMContentLoaded`, () => {
  getData.then((value) => {
    Application.init(value);
  }).catch(function (e) {});

});
