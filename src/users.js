// Imports small array of users
// Pretend it's an API request
const users = require("./data").default;

// Fetches all users
const getUsers = () => {
  return users;
};

// Filters users by specific ID
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

// test
// console.log(getUser(3));

module.exports = { getUsers, getUser };



function fetchPromise (id)
{
    //console.log("estamos solicitando su acceso ")// fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    if (user.id===id)
      {
        console.log("usuario encontrado ");
      } else {
        console.log("usuario no encontrado ");
      }
       
}
