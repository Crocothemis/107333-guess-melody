class PreloadImages {

  async loadImg(url) {
    if (url === ``) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const image = new Image();
      image.addEventListener(`load`, function () {
        resolve(true);
      }, false);
      image.src = url;
    });
  }

  async startPreloadImages(urls) {
    return Promise.all(urls.map(this.loadImg));
  }

  async init(value) {
    const images = [];
    value.forEach((elem) => {
      if (elem.type === `artist`) {
        elem.answers.forEach((answer) => {
          images.push(answer.image.url);
        });
      }
    });
    return this.startPreloadImages(images);
  }
}

export default new PreloadImages();
