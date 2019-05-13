export default class UI{
    constructor(){
        this.cardBody1 = document.querySelectorAll(".card-body")[0];
        this.hasan = document.querySelectorAll(".hasan")[0];
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
}