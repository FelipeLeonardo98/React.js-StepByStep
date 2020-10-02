// Configurando o acesso a api com axios
import axios from 'axios';

// Criando URL base de acesso
const api = axios.create({
   baseURL: 'http://localhost:8080/api'
});

export default api;