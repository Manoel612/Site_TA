/* importa API (back end) a qual conecta ao banco de dados */

import axios from 'axios'; // biblioteca que reune os servidores (back e front)

const api = axios.create({
    baseURL: 'http://localhost:3000', // servidor back
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default api;