import { observerMixin } from "./mixin.js";

export class BlogItem {
  constructor(date, title, desc) {
    this.title = title;
    this.date = date;
    this.desc = desc;
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

  add(item) {
    const array = Array.from(this.#data);
    const exists = array.filter((t) => t.title == item.title).length > 1;
    if (!exists) {
      this.#data.add(item);
      this.notify();
    }
  }
  remove(item) {
    let message = "Not found";
    this.#data.forEach((e)=>{
        if(e.title == item.title){
            this.#data.delete(e);
            message = "Deleted";
            this.notify();
            return;
        }
    })
    console.log(message);
  }
  find(title) {
    const array = Array.from(this.#data);
    return array.find((t)=> t.title == title);
  }
}

Object.assign(BlogList.prototype, observerMixin);