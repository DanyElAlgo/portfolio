import { BlogItem, BlogList } from "./services/blog__post.js";
import { Router } from './services/router.js';
import { renderHome } from './routes/home.js';
import { renderProjects } from './routes/projects.js';
import { renderBlog } from './routes/blog.js';

function createInitialPosts() {
    const blogList = BlogList.getInstance();
    blogList.add(
        new BlogItem(
            "April 27, 2025",
            "A new era",
            "With this page, I'm finally starting to worry more about my own future..."
        )
    );
    blogList.add(
        new BlogItem("2023-10-02", "Blog Post 2", "Description of blog post 2")
    );
}

const routes = {
    home: renderHome,
    projects: renderProjects,
    blog: renderBlog
};

window.addEventListener('DOMContentLoaded', () => {
    createInitialPosts();
    new Router(routes);
});