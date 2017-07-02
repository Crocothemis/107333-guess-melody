class PreloadImages {

  loadImg(url) {
    if (url === ``) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const image = new Image();
      image.addEventListener(`load`, function() {
        resolve();
      }, false);
      image.src = url;
    });
  }

  startPreloadImages(urls) {
    return Promise.all(urls.map(this.loadImg));
  }

  init(value) {
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
    return this.startPreloadImages(images);
  }

}

export default new PreloadImages();
