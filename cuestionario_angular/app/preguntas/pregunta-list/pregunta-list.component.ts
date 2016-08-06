import {Component} from "@angular/core"
import {PreguntaService} from "../shared/pregunta.service"
import {Pregunta} from "../shared/pregunta"


@Component({

    templateUrl: "./app/preguntas/pregunta-list/pregunta-list.component.html",
    providers: [PreguntaService]

})
export class PreguntaListComponent {

    data: Pregunta[];
    respuestas: String[];

    constructor(private service: PreguntaService) {
        this.data = null;
        this.data = this.service.getAll();
        this.respuestas = new Array(this.data.length);


    }


    calificar() {
        let m: number;
        let b: number;
        m = 0;
        b = 0;

        for (let i = 0; i < this.data.length; i++) {
            if (this.respuestas[i] == this.data[i].respuesta) {
                b++;
            } else {
                m++;
            }

            let usr = document.getElementById("res");
            usr.innerHTML = '<div id="res" class="row"><div class="col-md-5 ma"><div class="alert alert-success" role="alert">' +
                '<strong>' + b + '</strong> Pregunta(s) Correctas</div></div><div class="col-md-5 ma"><div class="alert alert-danger" role="alert">' +
                '<strong>' + m + '</strong> Pregunta(s) Incorrectas</div></div></div>';

        }

    }

    getValue(i: number, value: String) {
        this.respuestas[i] = value;
        console.log("i: " + i + " valor: " + value);
    }
}