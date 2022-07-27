import { clientServices } from "../services/customer-server.js";
import profile from "../db.json" assert { type: "json" };
console.log(profile.profile[1].email);
let check = true;
const formulario = document.querySelector("[data-form]");
const loginButtonSend = document.querySelector("#login-button-send");
const email = document.querySelector("#recuperate-email");
email.addEventListener('input', async (eventEmail) => {
    console.log(email.value);
    loginButtonSend.addEventListener('click', async (eventButton) => {
        eventButton.preventDefault();
        for (let i = 0; i < profile.profile.length; i++) {
            console.log(i);
            if (email.value === profile.profile[i].email) {
                window.location.href =
                  "../screens/update_client.html?id="+profile.profile[i].id;

                console.log(email.value);
            } else {
                check = false;
            }
            
        }
        console.log(check)
        
    });
})
const obtenerInformacion = async () => {
    // const url = new URL(window.location);
    // const id = url.searchParams.get("id");
    // if (id == null) {
    //     window.location.href="../screens/error.html"
    // }
    // const email = document.querySelector("[data-email]")
    // try {
    //     const perfil = await clientServices.detalleCliente(id);
    //     email.value = perfil.email;
    // } catch (error) {
    //     window.location.href="/screens/error.html"
    // }

}
// email.addEventListener('click')
obtenerInformacion();
formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const email = document.querySelector("[data-email]").value;
    try {
         await clientServices.actualizarCliente(email,password,id) 
         window.location.href="../screens/edicion_concluida.html"
     } catch (error) {
        window.location.href = "../screens/message.html?message=error";
    }

})