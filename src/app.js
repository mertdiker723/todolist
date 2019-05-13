import Storage from "./storage";
import UI from "./ui";

const storage = new Storage();
const ui = new UI();

const form = document.getElementById("todo-form");

const enterTodo = document.getElementById("todo");
const searchTodo = document.getElementById("filter");
const deleteAllTodos = document.getElementById("clear-todos");
//update etme işlemide yap
const ulGroup = document.getElementById("ulListGroup");

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded",uploadAllTodos);
    
    form.addEventListener("submit",sendTodos);
    enterTodo.addEventListener("click",enteredTodos);

}
function uploadAllTodos(e){
    const allTodos = storage.getTodos();
     ui.addTodoTaskIntoUI(allTodos);
    
}

function sendTodos(e){
    const enteredValue = enterTodo.value.trim();

    if(enteredValue === ""){
        ui.showAlert("danger","Please enter a to-do");
    }
    else{
        storage.addTodos(enteredValue);
    }
  
    e.preventDefault();
}


function enteredTodos(e){

}