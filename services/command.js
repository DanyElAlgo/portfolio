import { BlogItem, BlogList } from "./blog__post.js";
import { SavedList } from "./safe.js";

export class Command{
    name;
    args;
    constructor(name, args){
        this.name = name;
        this.args = args;
    }
}

export const Commands = {
    SEARCH: "search",
    FAV: "toggle-fav",
    BAR: "bar",
}

export const CommandExecutor = {
    execute(command){
        const savedList = BlogList.getInstance();
        switch(command.name){
            case Commands.SEARCH:
                const searchInput = command.args;
                const item = document.getElementById(savedList.find(searchInput).id);
                if(item){
                    item.scrollIntoView({ behavior: 'smooth' });
                    item.focus();
                }
                else{
                    console.log("Not found");
                }
                break;
            case Commands.FAV:
                /*
                El intercambio entre elementos favoritos lo realizo desde las mismas páginas,
                pero si se separan un poco las funciones necesarias, entonces quizás haya una
                manera de traer la funcionalidad hasta aquí
                */
               break;
            case Commands.BAR:
                let bar = document.getElementById("search-input");
                bar.focus();
        }
    }
}