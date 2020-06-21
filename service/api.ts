import axios from 'axios';

const api = axios.create({
  baseURL: 'http://**.**.**.**:3333', //Insira o ip localhost do seu server.
});

export default api;


// Utilizado a Lib abaixo:
// npm i axios