import { BlogItem, BlogList } from "./services/blog__post.js";
import { Router } from './services/router.js';
import { renderHome } from './routes/home.js';
import { renderProjects } from './routes/projects.js';
import { renderBlog } from './routes/blog.js';
import { renderSaved } from "./routes/saved.js";
import { Command, CommandExecutor } from "./services/command.js";

const routes = {
    home: renderHome,
    projects: renderProjects,
    blog: renderBlog,
    saved: renderSaved,
};

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("search-template").appendChild(document.createElement("search-bar"));
    new Router(routes);
});

window.addEventListener('keydown', (event) => {
    if(event.key == 'k' && event.ctrlKey == true){
        event.preventDefault();
        let com = new Command("bar");
        CommandExecutor.execute(com);
    }
    if(event.key == 'f' && event.ctrlKey == true){
        event.preventDefault();
        return new Command("fav"/*, post.id */);
    }
    if(event.key == 'Enter' && event.target.id == 'search-input') {
        event.preventDefault();
        let com = new Command("search", event.target.value);
        CommandExecutor.execute(com);
    }

});
