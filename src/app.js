/* Importaciones de modulos */
const express = require('express')
const morgan = require('morgan');

const videosRoutes = require('./routes/videos.routes');

/* Variables para el servidor */
const app = express();
const port= process.env.PORT || 3000;

app.set('port', port);

/* Middlewares */ 
app.use(morgan('dev'));
app.use(express.json());

/* Root Endpoint */
app.get('/', (req, res)=>{
    res.send('Api videos by Cristopher Rubio');
});

/* Importar videoRoutes */
app.use("/videos", videosRoutes);

/* Exportar app */
module.exports = app;