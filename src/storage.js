export default class Storage{
    constructor(){
        this.selectedAllli = document.querySelectorAll(".list-group-item");
    }

    getTodos(){
        let value;
        if(localStorage.getItem("todos") === null){
            value = [];
        }
        else{
            value = JSON.parse(localStorage.getItem("todos"));
        }
        return value;
    }

    addTodos(data){
        const allTodos = this.getTodos();
        allTodos.push(data);
        localStorage.setItem("todos",JSON.stringify(allTodos));
    }
    
    deleteOneTodo(text){
        const allTodos = this.getTodos();

        allTodos.forEach((item,index) =>{
            if(item == text){
                allTodos.splice(index,1);
            }
        });
        localStorage.setItem("todos",JSON.stringify(allTodos));
    }
}