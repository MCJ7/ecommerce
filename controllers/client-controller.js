import { clientServices } from "../services/customer-server.js";

console.log(clientServices)
const createNewLine = (email,password, id) => {
  const linea = document.createElement("tr");
  const content = ` 
    <td class="td" data-td>
      ${email}
    </td>
    <td>${password}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
    `;
    linea.innerHTML = content;
    const btn = linea.querySelector("button");
    btn.addEventListener('click', () => {
        const id = btn.id;
        clientServices
          .customerDelete(id)
          .then((respuesta) => {
            console.log(respuesta);
          })
          .catch((err) => alert("Ocurrió un error"));
    })
  return linea;
};
const table = document.querySelector("[data-table]");

clientServices
  .customerList()
  .then((data) => {
    data.forEach(({ email,password, id }) => {
      const createNew = createNewLine(email,password, id);
      table.appendChild(createNew);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
// const eliminarCliente = (id) => {
      
//   }