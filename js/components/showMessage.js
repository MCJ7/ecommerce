const messageTittle = document.querySelector("#message-tittle");
const imgMessage = document.querySelector("#img-message");
    const url = new URL(window.location);
const messageChoice = url.searchParams.get("message");
console.log(messageChoice)

const linkButton = document.querySelector(".link-button");

linkButton.addEventListener("click",() => {
    window.location.href = "/screens/index.html";
})
if (messageChoice === "success") {
    imgMessage.src = "../img/success.png";
    messageTittle.textContent = "El registro se completo con exito";
} else {
    messageTittle.textContent = "Se produjó un error";
    imgMessage.src = "../img/error.png";
}