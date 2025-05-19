import { Command, CommandExecutor, Commands } from "./services/command.js";
import { BlogItem, BlogList } from "./services/blog__post.js";

globalThis.DOM = {};

function renderList() {
  const blogList = BlogList.getInstance();
  DOM.blogList.innerHTML = "";
  for (const post of blogList.items) {
    const item = document.createElement("article");
    item.classList.add("blog__post");
    item.innerHTML = `
        <h6 class="blog__date">${post.date}</h6>
        <h3 class="blog__title">${post.title}</h3>
        <p class="blog__desc">${post.desc}</p>
        <button class="blog__save">Save</button>
    `;
    DOM.blogList.appendChild(item);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  DOM.addBtn = document.getElementById("blog__save");

  DOM.todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("blog__save")) {
      const item = new TodoItem(event.target.parentElement.innerText.split("\n")[0].trim());
      const cmd = new Command(Commands.DELETE, item);
      CommandExecutor.execute(cmd);
    }
  });

  BlogList.getInstance().addObserver(renderList);
});
