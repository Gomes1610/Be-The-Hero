const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);



/**********************TEORIA***************************
 * Rota / Recurso
 */

/**
* Métodos HTTP:
*
* GET: Buscar(ou Listar) uma informação no back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetro nomeados e enviados na rota após o "?". Para filtrar um conteúdo
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*/

/**
 * Tipos de Bancos de Dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB e etc
 */

/**
 * Comunicação com o Banco de Dados
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */