var data = [];
function guardarUsuario() {
    var nombre = document.getElementById("nombre");
    var cedula = document.getElementById("cedula");
    var celular = document.getElementById("celular");

    var usuario = {
        nombre: nombre.value,
        cedula: cedula.value,
        celular: celular.value
    };

    data.push(usuario);

    data.sort(function (a, b) {
        return a.cedula - b.cedula;
    });
    nombre.value = "";
    cedula.value = "";
    celular.value = "";
    cargarLista();
}

function cargarLista() {
    var list = document.getElementById("lista");
    list.innerHTML = "";
    for (i = 0; i < data.length; i++) {
        var usu = data[i];
        list.innerHTML += "<h1>" + usu.nombre + "</h1>"
            + "<p><b>Cedula: </b>" + usu.cedula + "<p>"
            + "<p><b>Celular: </b>+" + usu.celular + "</p>"
            +"<button onclick='eliminarUsuario("+i+")'>Eliminar</button>"
            + "<hr>";
    }
}



function textObj() {
    let test = document.getElementById("test");
    var obj = {};
    obj.nombre = "David";
    obj.cedula = 12345;
    obj.pastuso = true;
    obj.fechaNacimiento = new Date();
    obj.carros = [{ placa: "acx345", marca: "BMW" },
        { placa: "aop186", marca: "ferrari" }
    ];

    delete obj.cedula;
    test.innerHTML = JSON.stringify(obj);
}

function eliminarUsuario(i){
    data.splice(i,1);
    cargarLista();
}