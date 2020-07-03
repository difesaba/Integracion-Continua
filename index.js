const express = require('express');
const app = express();
const sql = require("mssql");
const path = require('path');
const router = express.Router();
const usuarios = require('./Routers/Usuarios')
const port = process.env.PORT || 3000;

const config = {
    user: 'sa',
    password: '123',
    server: 'LAPTOP-ODDH2EDI',
    database: 'LavaAutos',
    options: {
        encrypt: false,
        "enableArithAbort": true
    }
}
//middleware
/*
sql.connect(config, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Conectado a SqlServer');
    }
});
*/
app.use(express.json());
app.use(express.static(__dirname + '/Views'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/Public'));
app.use('/api/usuario/',usuarios);


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));

  });
app.listen(port, () => {
    console.log(`servidor corriendo`);
});

