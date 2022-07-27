const customerList = () => fetch('http://localhost:3000/profile').then((response) => response.json());

const createClient = (email,password) => {
   return fetch("http://localhost:3000/profile", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({ email, password, id: uuid.v4() }),
   });
}
const customerDelete = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
      method: "DELETE",
    });
}
const customerDetail = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`).then((response) =>
      response.json()
    );} 
const customerUpdate = (email,password,id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
} ;
export const clientServices = {
  customerList,
  createClient,
  customerDelete,
  customerDetail,
  customerUpdate,
};