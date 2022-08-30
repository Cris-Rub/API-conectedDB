const app = require('./app');
// const routerApi = require('');
const port = 3000;

(()=>{
    app.listen(port, ()=>{
        console.log('Servidor express listening...');
    });
})();