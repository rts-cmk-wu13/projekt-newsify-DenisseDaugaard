export default function dialogConfirm() {
    let confirmDialog = document.createElement("dialog");
    confirmDialog.classList.add('dialog__confirm')
    confirmDialog.innerHTML = `
    <p>Are you sure you want to delete this article??</p>
    <button class="delete__article">Yes I'm sure </button>
    <button class="not-delete__article">Annuler</button>
    `;

    let dialogConf = document.querySelector('.dialog__confirm')
    dialogConf.showModal()

    dialogConf.querySelector('.not-delete__article').addEventListener('click', (event)=> {
        event.close()
    })
    
    return confirmDialog;
}

export function dialogMessage() {
    let messageDialog = document.createElement("dialog");
    messageDialog.classList.add('dialog__message');

    messageDialog.innerHTML = `
        <p>This article was saved !</p>
        <button class="not-delete__article">×</button>
    `

    messageDialog.querySelector(".not-delete__article").addEventListener("click", () => {
        messageDialog.close();
    })

    return messageDialog;
}

