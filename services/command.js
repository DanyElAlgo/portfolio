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
    ADD: "add", 
    DELETE: "delete",
    SAVE: "save",
    SEARCH: "search",
    FAV: "toggle-fav"
}

export const CommandExecutor = {
    execute(command){
        const savedList = SavedList.getInstance();
        switch(command.name){
            // case Commands.ADD:
            //     const todoInput = globalThis.DOM.todoInput;
            //     const todoText = todoInput.value.trim();
            //     const todoExist = todoList.find(todoText);
            //     if(todoExist == undefined && todoText != ""){
            //         todoList.add(new TodoItem(todoText));
            //         todoInput.value = "";
            //     }
            //     break;
            // case Commands.DELETE:
            //     todoList.remove(command.args);
            //     break;
            case Commands.SEARCH:
                const searchInput = globalThis.DOM.searchInput.value.trim();
                const itemExists = savedList.find(searchInput);
                if(itemExists){
                    focus()
                    // CÓMO SE IMPLEMENTA ESTE DE AQUÍ?!
                }
                break;
            case Commands.FAV:
                
        }
    }
}

// Hora de devolverle la utilidad a esto