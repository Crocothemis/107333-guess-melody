class PreloadImages {

  async loadImg(url) {
    if (url === ``) {
      return Promise.resolve();
    }

    return await new Promise((resolve) => {
      const image = new Image();
      image.addEventListener(`load`, function () {
        resolve(true);
      }, false);
      image.src = url;
    });
  }

  async startPreloadImages(urls) {
    return await Promise.all(urls.map(this.loadImg));
  }

  async init(value) {
    let images = [];
    value.forEach((elem, i) => {
      if (elem.type === `artist`) {
        elem.answers.forEach((answer, j) => {
          if (images.indexOf(elem.answers[j].image.url) === -1) {
            images.push(elem.answers[j].image.url);
          }
        });
      }
    });
    return await this.startPreloadImages(images);
  }
}

export default new PreloadImages();
