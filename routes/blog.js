import { BlogItem, BlogList } from "../services/blog__post.js";

export function renderBlog() {
    const content = `
    <div class="main__wrapper">
        <section id="blog">
            <h2 class="main__title">My Blog</h2>
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

function initializeBlog() {
    globalThis.DOM = globalThis.DOM || {};
    DOM.blogList = document.querySelector(".blog");
    
    if (DOM.blogList) {
        renderBlogPosts();
        attachBlogListeners();
    }
}

function renderBlogPosts() {
    const blogList = BlogList.getInstance();
    DOM.blogList.innerHTML = "";
    
    for (const post of blogList.items) {
        const savedState = localStorage.getItem(`post_${post.id}`);
        const isSaved = savedState === "1";
        
        const item = document.createElement("article");
        item.classList.add("blog__post");
        item.innerHTML = `
            <h6 class="blog__date">${post.date}</h6>
            <h3 class="blog__title">${post.title}</h3>
            <p class="blog__desc">${post.desc}</p>
            <button class="blog__save ${isSaved ? 'blog__save--saved' : ''}" data-post-id="${post.id}">
                ${isSaved ? 'Saved' : 'Save'}
            </button>
        `;
        DOM.blogList.appendChild(item);
    }
}

function attachBlogListeners() {
    DOM.blogList.addEventListener("click", (event) => {
        if (event.target.classList.contains("blog__save")) {
            const button = event.target;
            const postId = button.dataset.postId;
            const isSaved = button.classList.contains("blog__save--saved");
            
            if (isSaved) {
                localStorage.removeItem(`post_${postId}`);
                button.classList.remove("blog__save--saved");
                button.textContent = "Save";
            } else {
                localStorage.setItem(`post_${postId}`, "1");
                button.classList.add("blog__save--saved");
                button.textContent = "Saved";
            }
        }
    });
}

