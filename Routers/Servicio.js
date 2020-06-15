const sql = require('mssql');
const express = require('express');
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
 
    request.execute('CrearProducto', function (err, result) {
        if (err) console.log(err)
        res.send(result.rowsAffected);
    });

});
router.put('path', (req, res) => {

});
router.delete('path', (req, res) => {

});