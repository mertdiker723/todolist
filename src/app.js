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
const deleteAll = document.getElementById("deleteAll");
const filterText = document.getElementById("filter");


eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded",uploadAllTodos);
    
    form.addEventListener("submit",sendTodos);
    ulListGroup.addEventListener("click",deleteTodo);
    deleteAllTodos.addEventListener("click",deleteTodosFromUIandStorage);    
    filterText.addEventListener("keyup",filterWrite);
    
}

function uploadAllTodos(e){
    const allTodos = storage.getTodos();
     ui.addTodoTaskIntoUI(allTodos);
    
}

function sendTodos(e){
    const enteredValue = enterTodo.value.trim();
    const selectedAllLi = document.querySelectorAll(".list-group-item"); 
    let control = false;    

    if(enteredValue === ""){
        ui.showAlert("danger","Please enter a to-do");
    }
    else{
        selectedAllLi.forEach((listItem) => {
            if(listItem.textContent.trim().toLowerCase() == enteredValue.toLowerCase()){            
                control = true; 
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

}

function deleteTodosFromUIandStorage(){
    const selectedAllLi = document.querySelectorAll(".list-group-item"); 

    selectedAllLi.forEach((element) => {
        storage.deleteOneTodo(element.textContent.trim());
        element.remove(); //UI delete all
    })
    ui.showAlert("success","All To-Dos were deleted..!");
}

ulListGroup.addEventListener("click",(e) => {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");

        ui.clearSelectedButtonAppear();
    }
})

deleteAll.addEventListener("click",(e) => {
    const selectedTodo = document.querySelectorAll(".list-group-item.checked");
    const buttonAppearInUI  = document.getElementById("deleteAll");
    selectedTodo.forEach((item)=>{
        storage.deleteOneTodo(item.textContent.trim());
        item.remove();
        buttonAppearInUI.classList.add("d-none");
    });
})
 
function filterWrite(e){
    const filterInput = e.target.value.toLowerCase();
    const listFilter = document.querySelectorAll(".list-group-item");

    listFilter.forEach((item) => {
        const itemCase = item.textContent.trim().toLowerCase();

        if(itemCase.indexOf(filterInput) === -1){
            item.setAttribute("style","display : none !important");
        }
        else{
            item.setAttribute("style","display : block");            
        }
    })
}