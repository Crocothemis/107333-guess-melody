import 'babel-polyfill';
import 'whatwg-fetch';

import screenWelcome from "./screens/screen-welcome";
import screenGame from './screens/screen-game';
import screenResult from './screens/screen-result';
import Model from './model';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

const getControllerFromHash = (hash) => hash.replace(`#`, ``).split(`?`)[0];

class Application {

  constructor() {
    this.routes = {
      [ControllerID.WELCOME]: screenWelcome,
      [ControllerID.GAME]: screenGame,
      [ControllerID.RESULT]: screenResult
    };

    window.onhashchange = () => {
      this.changeController(getControllerFromHash(location.hash));
    };

    this.changeController().catch(window.console.error);

  }

  async changeController(route = `result`) {
    if (route === `result`) {
      this.routes[route].init(this.decodeParams(location.hash.replace(`#`, ``).split(`?`)[1]));
    } else if (route === ``) {
      this.data = await Model.getData();
      this.routes[route].init(this.data);
      // Model.getData()
      //   .then((value) => {
      //     this.data = value;
      //     this.routes[route].init(this.data);
      //   })
      //   .catch(function (e) {});
    } else {
      this.routes[route].init(this.data);
    }

  }

   async init() {
     this.data = await Model.getData();
     this.changeController(getControllerFromHash(location.hash));
    // Model.getData()
    //   .then((value) => {
    //     this.data = value;
    //     this.changeController(getControllerFromHash(location.hash));
    //   })
    //   .catch(function (e) {});
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showResult(data) {
    location.hash = ControllerID.RESULT + `?` + this.encodeParams(data);
  }

  encodeParams(obj) {
    let str = ``;
    for (let key in obj) {
      if (str !== ``) {
        str += `&`;
      }
      str += key + `=` + encodeURIComponent(obj[key]);
    }
    return str;
  }

  decodeParams(str) {
    let obj = {};
    str.split(`&`).forEach(function (part) {
      let item = part.split(`=`);
      obj[item[0]] = decodeURIComponent(item[1]);
    });
    return obj;
  }

}

export default new Application();
