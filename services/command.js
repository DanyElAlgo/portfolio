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
        const savedList = SavedList.getInstance();
        switch(command.name){
            case Commands.SEARCH:
                const searchInput = globalThis.DOM.searchInput.value.trim();
                const itemExists = savedList.find(searchInput);
                if(itemExists){
                    item = document.getElementById(command.args);
                    item.focus();
                }
                break;
            case Commands.FAV:
                /*
                El intercambio entre elementos favoritos lo realizo desde las mismas páginas,
                pero si se separan un poco las funciones necesarias, entonces quizás haya una
                manera de traer la funcionalidad hasta aquí
                */
               break;
            case BAR:
                bar = document.getElementById("search-bar");
                bar.focus();
        }
    }
}