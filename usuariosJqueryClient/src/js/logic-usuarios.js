var crypto = require("crypto-js");

$("#btn-txt-in").click(function () {
    openModal("login");
});

$("#btn-icon-in").click(function () {
    openModal("login");
});


function openModal(modal) {
    $("#" + modal).openModal();
}

$("#btn-reg").click(function () {
    var nombre = $("#name").val();
    var cedula = $("#ced").val();
    var genero = $("input[name='genero']:checked").val();

    var usuario = $("#usr").val();
    var pass = $("#pass").val();

    var auth = usuario + "&&" + pass;
    var auth = ""+crypto.AES.encrypt(auth, "cualquiercosa");

    var usr = { nombre: nombre, cedula: cedula, genero: genero, auth: auth };

    $.ajax({
        type: "post",
        data:usr,
        dataType:"json",
        url:"http://localhost:8080/usuarios/signin"
    }).done(function(res){
        Materialize.toast("Registro Exitoso",4000);
    }).fail(function(){
        Materialize.toast("Error al registrar Usuario",4000);
    });
})
