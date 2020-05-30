const sql = require('mssql');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', (req, res) => {
    var request = new sql.Request();
    request.execute('dbo.TablaPrueba', function (err, recordset) {
        if (err) console.log(err)
        res.send(recordset);
    });
});

router.post('/', (req, res) => {
    const hash = bcrypt.hashSync(req.body.contrasena, saltRounds);
    console.log(hash);
    var request = new sql.Request();
    request.input('Rol', req.body.idRol)
    request.input('Usu', req.body.usuario)
    request.input('Contra', hash)
    request.input('Nombre', req.body.nombre)
    request.input('Tipo', req.body.tipoIde)
    request.input('Iden', req.body.identificacion)
    request.input('Tel', req.body.telefono)
    request.execute('CrearUsuario', function (err, result) {
        if (err) console.log(err)
        res.send(result.rowsAffected);
    });
});


router.post('/ValidaAut/', (req, res) => {
    var request = new sql.Request();
    request.query(`select * from usuario where usuariousu = '${req.body.usuario}'`, function (err, result) {
        if(result.recordset.length ==0 ){
            res.status(400).send('Usuario o COntraseña incorrectos');
        }
        else{
            res.send(result.recordset);
        }
    })
    });

module.exports = router;