const sql = require('mssql');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var request = new sql.Request();
    request.execute('dbo.Producto', function (err, recordset) {
        if (err) console.log(err)
        res.send(recordset);
    });
});


router.post('/crearProducto', (req, res) => {
    request.input('IdTipoP', req.body.idTipoP)
    request.input('IdEstadoP', req.body.idEstadoP)
    request.input('NombreProducto', req.body.nombreProducto)
    request.input('UnitarioProducto', req.body.unitarioProducto)
    request.input('IvaProducto', req.body.ivaProducto)

    request.execute('CrearProducto', function (err, result) {
        if (err) console.log(err)
        res.send(result.rowsAffected);
    });

});

router.put('/actualizaProducto', (req, res) => {
    router.post('path', (req, res) => {
        request.input('IdProducto', req.body.idProducto)
        request.input('IdTipoP', req.body.idTipoP)
        request.input('IdEstadoP', req.body.idEstadoP)
        request.input('NombreProducto', req.body.nombreProducto)
        request.input('UnitarioProducto', req.body.unitarioProducto)
        request.input('IvaProducto', req.body.ivaProducto)
    
        request.execute('ActualizarProducto', function (err, result) {
            if (err) console.log(err)
            res.send(result.rowsAffected);
        });
    
    });
});

router.delete('path', (req, res) => {
    router.delete('path', (req, res) => {
        request.query(' DELETE FROM CrearProducto WHERE IdProducto = '+ req.body.idP, function (err, result) {
            if (err) console.log(err)
            res.send(result.rowsAffected);
        });
    });
});