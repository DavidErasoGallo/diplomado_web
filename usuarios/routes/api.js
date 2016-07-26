var express = require("express");
var router = express.Router();
var mId = require("mongodb").ObjectId;
var validateToken = require("../util/validate-token");

//middleware que se ejecuta cada que llega el parametro
//coleccion en la url
router.param("collection", function (req, res, next, c) {
    req.c = req.db.collection(c);
    next();
});

//agregar recurso
router.post("/:collection", validateToken, function (req, res, next) {
    var obj = req.body; //obtenemos el objeto a insertar
    //insertamos el archivo en mongoDB, w:1 requerimos confirmación
    req.c.insert(obj, { w: 1 }, function (err, result) {
        if (err) {
            res.send({ success: false });
        } else {
            //exito, y retornamos la id del recurso
            res.send({ success: true, id: result.insertedIds[0] });
        }
    });
});

//eliminar recurso
router.delete("/:collection/:id", validateToken, function (req, res, next) {
    var id = new mId(req.params.id);
    req.c.deleteOne({ _id: id }, function (err, result) {
        if (err) {
            res.send({ success: false });
        } else {
            res.send({ success: true });
        }
    });
})

//obtener todos los usuarios
router.get("/:collection", validateToken, function (req, res, next) {
    req.c.find().toArray(function (err, results) {
        if (err) {
            res.send([]);
        } else {
            res.send(results);
        }
    });
});


//obtener los usuarios con criterio de busqueda
router.get("/:collection", validateToken, function (req, res, next) {
    var q = req.query.q;
    var limit = req.query.limit;
    var skip = req.query.skip;
    var sort = req.query.sort;

    if (q) {
        q = JSON.parse(q);
    }

    if (limit) {
        limit = parseInt(limit);
    } else {
        limit = 0;
    }

    if (skip) {
        skip = parseInt(skip);
    } else {
        skip = 0;
    }

    if (!sort) {
        sort = JSON.parse(sort);
    }


    req.c.find(q).limit(limit).skip(skip).sort(order).toArray(function (err, results) {
        if (err) {
            res.send([]);
        } else {
            res.send(results);
        }
    });
});



//obtener un solo usuario
router.get("/:collection/:id", validateToken, function (req, res, next) {
    var id = new mId(req.params.id);

    req.c.findOne({ _id: id }, function (err, result) {
        if (err || result == null) {
            res.status(404).send({ msg: "No encontrado" });

        } else {
            res.send(result);
        }
    });
});

//actualizar un usuario
router.put("/:collection/:id", validateToken, function (req, res, next) {
    var id = new mId(req.params.id);
    var obj = req.body;
    req.c.update({ _id: id }, { $set: obj }, function (err, result) {
        if (err) {
            res.send({ success: false });
        } else {
            res.send({ success: true });
        }
    });
});

//agregar objetos o arreglos de objetos 
//con la palabra reservada push
//Body:{campo: objeto}
//ejemplo {"celulares" : "200"}
router.put("/:collection/:id/push", validateToken, function (req, res, next) {
    var id = new mId(req.params.id);
    var obj = req.body;

    req.c.update({ _id: id }, { $push: obj }, function (err, result) {
        if (err) {
            res.send({ success: false });
        } else {
            res.send({ success: true });
        }
    });
});

//quitar elementos de un arreglo de objetos
//body {campo: critetio | valor}
//Ejemplo {"celulares" : "301"}, {"mascotas":{nombre:"luna"}}
router.put("/:collection/:id/pull", validateToken, function (req, res, next) {
    var id = new mId(req.params.id);
    var obj = req.body;

    req.c.update({ _id: id }, { $pull: obj }, function (err, result) {
        if (err) {
            res.send({ success: false });
        } else {
            res.send({ success: true });
        }
    });
});

module.exports = router;