import Application from "./application.js";
import Model from './model';

document.addEventListener(`DOMContentLoaded`, () => {
  Model.getData().then((value) => {
    Application.init(value);
  }).catch(function (e) {});

});
