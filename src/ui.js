export default class UI{
    constructor(){
        this.cardBody1 = document.querySelectorAll(".card-body")[0];
        this.hasan = document.querySelectorAll(".hasan")[0];
        this.listGroup = document.getElementById("ulListGroup");
    }

    showAlert(type,message){
        const createdDiv = document.createElement("div");
        createdDiv.className = `alert alert-${type}`;
        createdDiv.textContent = message;
        const messageAlert = this.hasan.appendChild(createdDiv);

        setTimeout(() => {
            messageAlert.remove();
        },2200);
    }

    addTodoTaskIntoUI(data){
        let html = "";
        data.forEach((text) => {
            html += `
            <li class="list-group-item" style="margin-bottom:11px">
               <b>${text}</b>              
               <button class="btnTrash" style="float: right;"><i class="fa fa-trash"></i></button>                 
            </li>
            `;
        })
        this.listGroup.innerHTML = html;

    }

    addATodoIntoUI(data){
        this.listGroup.innerHTML += `
        <li class="list-group-item" style="margin-bottom:11px">
            <b>${data}</b> 
            <button class="btnTrash" style="float: right;"><i class="fa fa-trash"></i></button>
        </li>`;
    }
    deleteTodoFromUI(element){
        element.remove();
    }

    clearSelectedButtonAppear(){
        const selectedLiInUI = document.querySelectorAll(".list-group-item.checked"); //Array
        const buttonAppearInUI  = document.getElementById("deleteAll");

        if(selectedLiInUI.length > 0){
            buttonAppearInUI.classList.remove("d-none");
        }
        else{
            buttonAppearInUI.classList.add("d-none");
        }
    }
}