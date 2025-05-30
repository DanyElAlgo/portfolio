import { BlogItem, BlogList } from "./services/blog__post.js";
import { Router } from './services/router.js';
import { renderHome } from './routes/home.js';
import { renderProjects } from './routes/projects.js';
import { renderBlog } from './routes/blog.js';
import { renderSaved } from "./routes/saved.js";
import { Command } from "./services/command.js";
import searchBar from "./blocks/search-bar.js";



const routes = {
    home: renderHome,
    projects: renderProjects,
    blog: renderBlog,
    saved: renderSaved,
};

window.addEventListener('DOMContentLoaded', () => {
    new Router(routes);
    searchBar();
});

window.addEventListener('onChange', () => {
    const command = new Command("search");
});

window.addEventListener('keydown', (event) => {
    event.preventDefault();
    if(event == "Ctrl"+"K"){
        console.log("what")
        return new Command("bar")
    }
    if(event == "Ctrl"+"F"){
        return new Command("fav"/*, post.id */)
    }
});