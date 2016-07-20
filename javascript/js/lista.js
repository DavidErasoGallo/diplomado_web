var data = [];
function loadList(e) {
    // alert(e.key+".."+e.keyCode);
    if (e.keyCode == 13) {
        var lista = document.getElementById("lista"); // let lista =
        var campo = document.getElementById("campo");
        var array = campo.value.split(",");
        if (array.length >= 2) {
            /*for (a in array) {
                addLi(lista,array[a]);
            }*/
            data = data.concat(array);
        } else {
            data.push(campo.value);
        }
        campo.value = "";
        data.sort();
        lista.innerHTML = "";
        data.forEach(function (item) {
            addLi(lista, item);
        });
        //data.forEach((item)=>addLi(lista,item));
    }
}

function clickItem(txt) {
    alert(txt);
}

function addLi(lista, value) {
    lista.innerHTML += "<li onclick='clickItem(\""
        + value + "\")'>"
        + value + "</li>";
}