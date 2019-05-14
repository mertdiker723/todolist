import Storage from "./storage";
import UI from "./ui";

const storage = new Storage();
const ui = new UI();

const form = document.getElementById("todo-form");

const enterTodo = document.getElementById("todo");
const searchTodo = document.getElementById("filter");
const deleteAllTodos = document.getElementById("clear-todos");
//update etme işlemide yap
const ulListGroup = document.getElementById("ulListGroup");

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded",uploadAllTodos);
    
    form.addEventListener("submit",sendTodos);
    ulListGroup.addEventListener("click",deleteTodo);
    deleteAllTodos.addEventListener("click",deleteTodosFromUIandStorage);
    

}

function uploadAllTodos(e){
    const allTodos = storage.getTodos();
     ui.addTodoTaskIntoUI(allTodos);
    
}

function sendTodos(e){
    const enteredValue = enterTodo.value.trim();
    const selectedAllLi = document.querySelectorAll(".list-group-item"); 
    let control = false;
    let text;

    if(enteredValue === ""){
        ui.showAlert("danger","Please enter a to-do");
    }
    else{
        selectedAllLi.forEach((listItem) => {
            if(listItem.textContent.trim().toLowerCase() == enteredValue.toLowerCase()){     // küçük büyük harf olayını hallet          
                control = true; //****
            }
        });
            if(control == false){                
                ui.addATodoIntoUI(enteredValue);
                storage.addTodos(enteredValue);
            }
             else
            {
            ui.showAlert("warning","To-Do entered was created before!");
            }
    }
    enterTodo.value = "";
    e.preventDefault();
}

function deleteTodo(e){     
    // if((e.target.className == "fa fa-trash") || (e.target.className == "btnTrash" ))
      
    if(e.target.className == "fa fa-trash"){
        storage.deleteOneTodo(e.target.parentElement.parentElement.textContent.trim());
        ui.deleteTodoFromUI(e.target.parentElement.parentElement);   
    }
    else if(e.target.className == "btnTrash"){
        storage.deleteOneTodo(e.target.parentElement.textContent.trim());
        ui.deleteTodoFromUI(e.target.parentElement);
    }       
    ui.showAlert("success","All To-Dos were deleted..!");
}

function deleteTodosFromUIandStorage(){

}