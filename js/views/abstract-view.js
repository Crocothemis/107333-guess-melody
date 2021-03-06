import getElementFromTemplate from "../get-element-from-template";

export default class AbstractView {
  get template() {
    throw new Error(`You have to define template for view`);
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  postRender() {
  }

  bind() {
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.postRender();
      this.bind();
    }
    return this._element;
  }
}
