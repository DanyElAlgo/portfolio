import { Command, CommandExecutor, Commands } from "./services/command.js";
import { BlogItem, BlogList } from "./services/blog__post.js";

globalThis.DOM = {};

function createInitialPosts() {
  const blogList = BlogList.getInstance();
  blogList.add(
    new BlogItem(
      "April 27, 2025",
      "A new era",
      "With this page, I'm finally starting to worry more about my own future, I must keep working hard on getting a clean image and presentation of myself once I finish the University, will I be able to accomplish my dream of going back to Spain and help my family?"
    )
  );
  blogList.add(
    new BlogItem("2023-10-02", "Blog Post 2", "Description of blog post 2")
  );
}

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
  DOM.blogList = document.querySelector(".blog");

  createInitialPosts();

  DOM.blogList.addEventListener("click", (event) => {
    if (event.target.classList.contains("blog__save")) {
      // Toggle the active class
      event.target.classList.toggle("blog__save--active");

      event.target.textContent = event.target.classList.contains(
        "blog__save--active"
      )
        ? "Saved"
        : "Save";
    }
  });

  renderList();

  BlogList.getInstance().addObserver(renderList);
});

//TODO: Añadir routers, abstracción y design patterns. También los elementos dinámicos y el guardado like
