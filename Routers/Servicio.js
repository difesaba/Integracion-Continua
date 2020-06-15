const sql = require('mssql');
const express = require('express');
const { request } = require('https');
const router = express.Router();

router.get('/', (req, res) => {
    var request = new sql.Request();
    request.execute('dbo.Servicio', function (err, recordset) {
        if (err) console.log(err)
        res.send(recordset);
    });
});
router.post('/crearServicio', (req, res) => {
    request.input('IdSuc', req.body.idSuc)
    request.input('IdEstado', req.body.idEstado)
    request.input('PlacaServicio', req.body.placaServicio)
    request.input('NoServicio', req.body.noServicio)
    request.input('FechaServicio', req.body.fechaServicio)
 
    request.execute('CrearServicio', function (err, result) {
        if (err) console.log(err)
        res.send(result.rowsAffected);
    });

});
router.put('/actualizarServicio', (req, res) => {
    request.input('IdServicio', req.body.idServicio)
    request.input('IdSuc', req.body.idSuc)
    request.input('IdEstado', req.body.idEstado)
    request.input('PlacaServicio', req.body.placaServicio)
    request.input('NoServicio', req.body.noServicio)
    request.input('FechaServicio', req.body.fechaServicio)
    
        request.execute('ActualizarServicio', function (err, result) {
            if (err) console.log(err)
            res.send(result.rowsAffected);
        });


});
router.delete('/eliminar', (req, res) => {
    request.query(' DELETE FROM Sucursal WHERE IdSuc = '+ req.body.idSuc, function (err, result) {
        if (err) console.log(err)
        res.send(result.rowsAffected);
    });
});