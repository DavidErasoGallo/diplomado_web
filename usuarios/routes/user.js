var express = require("express");
var router = express.Router();

//ver todos los usuarios
router.get("/", function (req, res, next) {
     var nombre = req.query.nombre;
     var apellido = req.query.apellido;
    res.send({ msg: "metodo get",nombre:nombre+" "+apellido });
   


});

//ver solo un usuario
router.get("/:id", function (req, res, next) {
    var id = req.params.id;
    res.send({ msg: "metodo get", id: id });
});

//agregar un usuario
router.post("/", function (req, res, next) {
    res.send({ msg: "metodo post" });
});

//modificar un usuario
router.put("/:id", function (req, res, next) {
    var id = req.params.id;
    res.send({ msg: "metodo put", id: id });
});

//eliminar un usuario
router.delete("/:id", function (req, res, next) {
    var id = req.params.id;
    res.send({ msg: "metodo delete", id: id });
});

module.exports = router;