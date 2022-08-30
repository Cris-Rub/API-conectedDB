/* Importaciones de modulos */
const express = require('express')
const morgan = require('morgan');

const videosRoutes = require('./routes/videos.routes');

/* Variables para el servidor */
const app = express();
const port=3000;

app.set('port', port);

/* Middlewares */ 
app.use(morgan('dev'));
app.use(express.json());

/* Importar videoRoutes */
app.use("/api-restfull/videos", videosRoutes);

/* Exportar app */
module.exports = app;