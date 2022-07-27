import { clientServices } from '../services/customer-server.js'
const form = document.querySelector("[data-form]")

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;
    try {
        await clientServices.createClient(email,password);
        window.location.href = "../screens/message.html?message=success";
    } catch (error) {
        window.location.href = "../screens/message.html?message=error";
    }
});
