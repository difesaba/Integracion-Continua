const sql = require('mssql');
const express = require('express');
const router = express.Router();

router.get('path', (req, res) => {
    var request = new sql.Request();
    request.execute('dbo.Sucursal', function (err, recordset) {
        if (err) console.log(err)
        res.send(recordset);
    });
});

router.post('/crearSucursal', (req, res) => {
    request.input('IdEm', req.body.idEm)
    request.input('NombreSuc', req.body.nombreSuc)
    request.input('CiudadSuc', req.body.ciudadSuc)
    request.input('DireccionSuc', req.body.direccionSuc)
    request.input('TelefonoSuc', req.body.telefonoSuc)

    request.execute('CrearSucursal', function (err, result) {
        if (err) console.log(err)
        res.send(result.rowsAffected);
    });
});


router.put('/actualizaSucursal', (req, res) => {
    request.input('IdSuc', req.body.idSuc)
    request.input('IdEm', req.body.idEm)
    request.input('NombreSuc', req.body.nombreSuc)
    request.input('CiudadSuc', req.body.ciudadSuc)
    request.input('DireccionSuc', req.body.direccionSuc)
    request.input('TelefonoSuc', req.body.telefonoSuc)

    request.execute('ActualizarSucursal', function (err, result) {
        if (err) console.log(err)
        res.send(result.rowsAffected);
    });
});


router.delete('/eliminaSucursal', (req, res) => {
    request.query(' DELETE FROM Sucursal WHERE IdSuc = '+ req.body.idSuc, function (err, result) {
        if (err) console.log(err)
        res.send(result.rowsAffected);
    });
});