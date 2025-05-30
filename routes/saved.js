import { BlogItem, BlogList } from "../services/blog__post.js";

export function renderSaved() {
  const content = `
    <div class="main__wrapper">
        <section id="blog">
            <h2 class="main__title">Saved posts</h2>
            <div class="blog">
            </div>
        </section>
        </div>
    `;

  setTimeout(() => {
    initializeBlog();
  }, 0);

  return content;
}

function attachBlogListeners() {
  DOM.blogList.addEventListener("click", (event) => {
    if (event.target.classList.contains("blog__save")) {
      const button = event.target;
      const postId = button.dataset.postId;
      const postDesc = event.srcElement.previousElementSibling.parentElement;

        localStorage.removeItem(`post_${postId}`);
        button.classList.remove("blog__save--saved");
        postDesc.remove();
        button.textContent = "Save";

    }
    // Now it reloads repeated data, noooooooo
  });
}

function initializeBlog() {
  globalThis.DOM = globalThis.DOM || {};
  DOM.blogList = document.querySelector(".blog");

  if (DOM.blogList) {
    // renderInitialPosts(); // Legacy posts
    attachBlogListeners();
    setup();
  }
}

function setup() {
  const sentinel = document.createElement("div");
  sentinel.className = "blog__sentinel";
  DOM.blogList.appendChild(sentinel);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMorePosts();
        }
      });
    },
    {
      rootMargin: "100px",
    }
  );

  observer.observe(sentinel);
}

function loadMorePosts() {
  const blogList = BlogList.getInstance();
  const currentPostsCount = DOM.blogList.querySelectorAll(".blog__post").length;

  const newPosts = dbGenerator(currentPostsCount);

  newPosts.forEach((post) => {
    blogList.add(post);
  });

  newPosts.forEach((post) => {
    const savedState = localStorage.getItem(`post_${post.id}`);
    const isSaved = savedState != null;
    if (isSaved) {
      const item = document.createElement("article");
      item.classList.add("blog__post");
      item.innerHTML = `
            <h6 class="blog__date">${post.date}</h6>
            <h3 class="blog__title">${post.title}</h3>
            <p contenteditable id="blog__desc" class="blog__desc">${
              savedState
            }</p>
            <button class="blog__save ${
              "blog__save--saved"
            }" data-post-id="${post.id}">
                ${"Saved"}
            </button>
        `;
      DOM.blogList.insertBefore(item, DOM.blogList.lastElementChild);

      let observer = new MutationObserver((mutationRecords) => {
        console.log(mutationRecords);
      });

      observer.observe(item.querySelector(".blog__desc"), {
        childList: true,
        subtree: true,
        characterDataOldValue: true,
      });
    }
  });
}

function dbGenerator(startIndex) {
  const posts = [];
  const numberOfNewPosts = 5;

  for (let i = 0; i < numberOfNewPosts; i++) {
    const postId = startIndex + i + 1;
    posts.push(
      new BlogItem(
        postId,
        new Date().toLocaleDateString(),
        `Blog Post ${postId}`,
        `This is the description for blog post ${postId}. Generated dynamically.`
      )
    );
  }

  return posts;
}
