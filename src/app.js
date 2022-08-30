/* Importaciones de modulos */
const express = require('express');
const morgan = require('morgan');

/* Variables para el servidor */
const app = express();
const port=3000;

app.set('port', port);

/* Middlewares */ 
app.use(morgan('dev'));
app.use(express.json());

/* Exportar app */
module.exports = app;