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


