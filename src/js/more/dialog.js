import saveToLocalStorage from "./local-storage.js";
import { readFromLocalStorage } from "./local-storage.js";


export default function dialogConfirm() {
    let confirmDialog = document.createElement("dialog");
    confirmDialog.classList.add('dialog__confirm')
    confirmDialog.innerHTML = `
    <p>Are you sure you want to delete this article??</p>

    <div class="buttons__container">
        <button class="delete__article">Yes I'm sure </button>
        <button class="not-delete__article">Annuller</button>
    </div>
    `;

    confirmDialog.querySelector('.not-delete__article').addEventListener("click", () => {
        confirmDialog.close()
    })
 

    return confirmDialog;
}

export function dialogMessage() {
    let messageDialog = document.createElement("dialog");
    messageDialog.classList.add('dialog__message');

    messageDialog.innerHTML = `
        <p>This article was saved !</p>

        <button class="not-delete__article">Ok</button>
    `

    messageDialog.querySelector(".not-delete__article").addEventListener("click", () => {
        messageDialog.close()
    })

    return messageDialog;
}


export function loginDialog(){
  
        let loginElm = document.createElement("dialog");
        loginElm.classList.add('login__dialog')
        loginElm.innerHTML = `

        <form class="login__form" action="settings.html">
         <h4>Please insert your data to Sign In!</h4>
         <input id="username" type="text" name="username"placeholder="Username">
         <input id="password" type="password" name="pass"  placeholder="Password">
         <button class="login__button">Sign In</button>
         </form>
        `;

        let form = loginElm.querySelector('form')
        let userName =  form.querySelector('#username')
        let password =  form.querySelector('#password')
        //console.log(userName);
       
        

        loginElm.querySelector('.login__button').addEventListener('click', (event) => {
            event.preventDefault ()

            if ( userName.value !== '' && password.value !== '') {
                console.log('info saved');
                saveToLocalStorage('userName', userName.value)
                saveToLocalStorage('password', password.value)
                
                window.location.href = "settings.html"
            }

            loginElm.close()
        });
        

        return loginElm;

}