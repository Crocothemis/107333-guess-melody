const questionsUrl = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
const statsUrl = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/tanya107333`;

class Model {
  constructor() {
  }

  async loadData() {
    const response = await fetch(questionsUrl);
    return response.json();
  }

  async getData() {
    const response = await fetch(questionsUrl);
    return response.json();
  }

  getStat() {
    return fetch(statsUrl)
      .then((resp) => resp.json())
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
