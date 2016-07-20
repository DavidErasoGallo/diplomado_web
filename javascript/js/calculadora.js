var num1="",num2="";
var num = false;
var op;

/*function mostrarInput() {
    var campo= document.getElementById("campo");
    alert("Valor: "+campo.value);
}*/

function concatenar(numero) {
    if(!num){
        num1+=numero;
        mostrarNumero(num1);
        
    }
    else{
        num2+=numero;
        mostrarNumero(num2);
    }
          
}

function operar(operacion){
    op = operacion;
    num = true;
    mostrarNumero(0);
}

function resultado() {
        var a = Number(num1);
        var b = Number(num2);
        res = 0;
        if(op==4 && b==0){
            alert("División invalida");
        }
        else {
    switch(op){
        case 1:
           res=a+b;
        break;
        case 2:
            res=a-b;
        break;
        case 3:
            res=a*b;
        break;
        case 4:
            res=a/b;
        break;

    }
        mostrarNumero(res);
        num1="",num2="";
        num = false;
        }
}

function mostrarNumero(valor) {
    var campo= document.getElementById("campo").value=valor;
}

function reiniciar(){
    num = false;
    num1 ="",num2="";
}