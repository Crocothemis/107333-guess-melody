const getData = (url) => new Promise(function (resolve) {
  fetch(url).then(function (response) {
    const contentType = response.headers.get(`content-type`);

    if (contentType && contentType.indexOf(`application/json`) !== -1) {
      response.json().then(function (json) {
        resolve(json);
      });
    }
  });
});


export default getData(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`);
