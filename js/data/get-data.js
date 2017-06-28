import {random} from '../helpers/random';

export default function getData() {
  return new Promise(function (resolve) {
    fetch(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`).then(function (response) {
      const contentType = response.headers.get(`content-type`);

      if (contentType && contentType.indexOf(`application/json`) !== -1) {
        response.json().then(function (json) {
          resolve(random(json));
        });
      }
    });
  });
}
