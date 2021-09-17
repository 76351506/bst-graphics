/*
 * @Author: heinan
 * @Date: 2021-09-17 09:57:20
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-17 11:04:06
 */
class Form {
  constructor() {
    this.form = document.querySelector("form");
    this.arrayLenth = 10;
    this.array = [4, 10, 5, 8, 2];
    this.init();
  }
  init() {
    this.initDom();
  }
  initDom() {
    document.querySelector('input[name="arrayLength"]').value = this.arrayLenth;
    this.arrayRender();
  }
  createArry() {
    for (let i = 0; i < this.arrayLenth; i++) {
      const number = Math.ceil(Math.random() * 100);
      this.array.push(number);
    }
    this.arrayRender();
  }
  arrayRender() {
    const textarea = document.querySelector('textarea[name="array"]');
    textarea.value = `[${this.array}]`;
  }
  getArray() {
    return this.array;
  }
  addEvent(callback) {
    this.form.addEventListener("click", (e) => {
      e.preventDefault();
      switch (e.target.getAttribute("name")) {
        case "create":
          this.arrayLenth = document.querySelector(
            'input[name="arrayLength"]'
          ).value;
          this.array = [];
          this.createArry();
          callback();
          break;

        default:
          break;
      }
    });
  }
}
export default Form;
