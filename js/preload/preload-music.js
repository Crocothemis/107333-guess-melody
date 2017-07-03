class PreloadMusic {

  async loadMusic(url) {
    if (url === ``) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const audio = new Audio();
      audio.addEventListener(`canplaythrough`, function () {
        resolve(true);
      }, false);
      audio.src = url;
    });
  }

  async startPreloadMusic(urls) {
    return Promise.all(urls.map(this.loadMusic));
  }

  async init(value) {
    const urls = [];
    value.forEach((elem) => {
      if (elem.type === `genre`) {
        elem.answers.forEach((answer) => {
          if (urls.indexOf(answer.src) === -1) {
            urls.push(answer.src);
          }
        });
      } else {
        urls.push(elem.src);
      }
    });
    return this.startPreloadMusic(urls);
  }
}

export default new PreloadMusic();
