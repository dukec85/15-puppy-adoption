import PuppyView from 'puppy-view';
import CreateFormView from 'create-form';

export default class ApplicationView {
  constructor(element) {
    this.element = element;
    this.data = [];
  }
  render() {
    const list = this.element.querySelector('.puppy-list');
    list.innerHTML = '';
    debugger;

    this.data.forEach((puppy) => {
      const newPuppy = new PuppyView(puppy, this);
      list.appendChild(newPuppy.element);
      puppy.render();

      this.element.appendChild(puppy.element);
    });
  }
  start() {
    return fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.render();
      })
  }
}
