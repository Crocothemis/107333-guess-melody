const questionsUrl = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
const statsUrl = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/tanya107333`;

class Model {
  constructor() {
  }

   static async getData() {
    // return fetch(questionsUrl).
    //   then((resp) => resp.json())
    //   .catch((e)=> window.console.log(e));
    const response = await fetch(questionsUrl);
    console.log( response.json());
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
  // async function load() {
  // const response = await fetch(`http://localhost:8080/api/request`);
  // const responseData = await response.json();
  // console.log(responseData);
// };

}

export default new Model();
