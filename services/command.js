import { BlogItem, BlogList } from "./blog__post.js";

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
}

export const CommandExecutor = {
    execute(command){
        const todoList = BlogList.getInstance();
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
            case Commands.SAVE:
                
        }
    }
}