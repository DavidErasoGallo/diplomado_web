var express = require("express");
var router = express.Router();
var mId = require("mongodb").ObjectId;

//middleware que se ejecuta cada que llega el parametro
//coleccion en la url
router.param("collection", function (req, res, next, c) {
    req.c = req.db.collection(c);
    next();
});

//agregar recurso
router.post("/:collection", function (req, res, next) {
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
router.delete("/:collection/:id", function (req, res, next) {
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
router.get("/:collection", function (req, res, next) {
    req.c.find().toArray(function (err, results) {
        if (err) {
            res.send([]);
        } else {
            res.send(results);
        }
    });
});

//obtener un solo usuario
router.get("/:collection/:id", function (req, res, next) {
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
router.put("/:collection/:id",function (req,res,next){
    var id = new mId(req.params.id);
    var obj = req.body;
    req.c.update({_id:id}, {$set:obj},function (err, result){
         if (err) {
            res.send({ success: false });
        } else {
            res.send({ success: true });
        }
    });
});

module.exports = router;