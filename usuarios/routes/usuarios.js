var express = require("express");
var crypto = require("crypto-js");
var router = express.Router();
var validateTime = require("../util/validate-time");
var jsonToken = require("jsonwebtoken");
var settings = require("../settings/settings");

router.use(function(req, res, next) {
    req.c = req.db.collection("usuarios");
});

router.post("/signin",function(req,res,next) {
    var body = req.body;
    var auth = body.auth;
    auth = ""+crypto.AES.decrypt(auth, settings.secret);
    auth = auth.split("$$");
    delete body.auth;
    body.usuario = auth[0];
    body.password = ""+crypto.SHA(auth[1]);
    req.c.insert(body, function(err, result) {
        if(err){
            res.send({success: false});
        }else{
            res.send({success: true});
        }
    })


});

router.post("/login",function(req,res,next) {
    var body = req.body;
    var auth = body.auth;
    auth = ""+crypto.AES.decrypt(auth, settings.secret);
    auth = auth.split("$$");

    var timestamp = auth[2];

    if(validateTime.validate(timestamp)){
        req.c.find({usuario:auth[0], password:auth[1],
            function(err, result) {
                if(err || result == null){
                    res.send({success : false});
                }else{
                    var token = jsonToken.sign(result._id, settings.secret);
                    res.send(success: true, token:token, usuario:result);
                }
            }})
    }else{
        res.status(401).send({success: false, msg: "Error en solicitud"});
    }

    
});

module.exports = router;