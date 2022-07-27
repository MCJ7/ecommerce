import { clientServices } from "../services/customer-server.js";

const formulario = document.querySelector("[data-form]");
const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id == null) {
        window.location.href = "../screens/message.html?message=error";
    }
    const email = document.querySelector("[data-email]")
    const password = document.querySelector("[data-password]");
    try {
        const perfil = await clientServices.customerDetail(id);
        email.value = perfil.email;
        password.value = perfil.password;
    } catch (error) {
        window.location.href = "../screens/message.html?message=error";
    }

}
obtenerInformacion();
formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;

    //     clientServices.actualizarCliente(email,password, id).then(() => {
    //     window.location.href="/screens/edicion_concluida.html"
    // });
    try {
         await clientServices.customerUpdate(email, password, id); 
         window.location.href = "../screens/message.html?message=success";
     } catch (error) {
        window.location.href = "../screens/message.html?message=error";
    }

})