const mysql = require('promise-mysql');
const config = require('./Constants');

/* Conectandose a la data base. */
const connection = mysql.createConnection({
    host: config.HOST,
    database: config.DB,
    user: config.USER,
    password: config.PASSWORD
});

const getConnection=()=>{
    return connection;
};

module.exports={
    getConnection
};