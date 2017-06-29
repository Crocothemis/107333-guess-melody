const questionsUrl = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
const statsUrl = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/tanya107333`;

class Model {
  constructor() {
  }

  getData() {
    return fetch(questionsUrl).
      then((resp) => resp.json())
      .catch((e)=> window.console.log(e));
  }

  sendData(data) {
    const requestSettings = {
      body: data,
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(statsUrl, requestSettings);
  }

}

export default new Model();
