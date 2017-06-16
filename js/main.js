import showScreenWelcome from "./screens/screen-welcome";
import currentState from './data/initial-data';
import artists from './data/artists';

let data = artists[currentState.artistCount];

document.addEventListener(`DOMContentLoaded`, () => {
  showScreenWelcome(data, currentState);
});
