import { BlogItem, BlogList } from "./services/blog__post.js";
import { Router } from './services/router.js';
import { renderHome } from './routes/home.js';
import { renderProjects } from './routes/projects.js';
import { renderBlog } from './routes/blog.js';
import { renderSaved } from "./routes/saved.js";
import { Command, CommandExecutor } from "./services/command.js";
import searchBar from "./blocks/search-bar.js";

function createInitialPosts() {
    const blogList = BlogList.getInstance();
    blogList.add(
        new BlogItem(
            1,
            "April 27, 2025",
            "A new era",
            "Hey, my post got deleted >:c"
        )
    );
    blogList.add(
        new BlogItem(2, "2023-10-02", "Blog Post 2", "Description of blog post 2")
    );
}

const routes = {
    home: renderHome,
    projects: renderProjects,
    blog: renderBlog,
    saved: renderSaved,
};

window.addEventListener('DOMContentLoaded', () => {
    // createInitialPosts();
    new Router(routes);
});

window.addEventListener('onChange', () => {
    const command = new Command("search");
});

