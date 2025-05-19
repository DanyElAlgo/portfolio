import { observerMixin } from "./mixin.js";

export class BlogItem {
  constructor(text) {
    this.text = text;
  }
}

export class BlogList {
  #data = new Set();

  get items() {
    return this.#data;
  }

  static instance = null;
  static {
    this.instance = new BlogList();
  }

  constructor() {
    if (BlogList.instance) {
      console.log("NO MULTIPLE INSTANCES >:(");
    }
  }

  static getInstance() {
    return this.instance;
  }

  add(todoItem) {
    const array = Array.from(this.#data);
    const todoExists = array.filter((t) => t.text == todoItem.text).length > 1;
    if (!todoExists) {
      this.#data.add(todoItem);
      this.notify();
    }
  }
  remove(todoItem) {
    let message = "Not found";
    this.#data.forEach((e)=>{
        if(e.text == todoItem.text){
            this.#data.delete(e);
            message = "Deleted";
            this.notify();
            return;
        }
    })
    console.log(message);
  }
  find(text) {
    const array = Array.from(this.#data);
    return array.find((t)=> t.text == text);
  }
}

Object.assign(BlogList.prototype, observerMixin);