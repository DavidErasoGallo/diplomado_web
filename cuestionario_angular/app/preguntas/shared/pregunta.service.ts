import {Injectable} from "@angular/core"
import {Pregunta} from "./pregunta"

@Injectable()
export class PreguntaService {

    data: Pregunta[];

    getAll() {
        
     this.loadPreguntas();
        
        return this.data;
    }

    getPregunta(index: number) {
        return this.data[index];
    }

    addPregunta(pregunta: Pregunta) {
        this.data.push(pregunta);
    }

    private loadPreguntas() {
        let p1: Pregunta = new Pregunta();
        p1.nombre = "PREGUNTA 1";
        p1.descripcion = "Determina la forma del cuadrado";
        p1.respuesta = "d";
        p1.imagen = "./assets/images/7.png";

        let p2: Pregunta = new Pregunta();
        p2.nombre = "PREGUNTA 2";
        p2.descripcion = "Determina la forma de la figura";
        p2.respuesta = "a";
        p2.imagen = "./assets/images/2.png";

        let p3: Pregunta = new Pregunta();
        p3.nombre = "PREGUNTA 3";
        p3.descripcion = "Determina el orden correcto";
        p3.respuesta = "b";
        p3.imagen = "./assets/images/5.png";

        let p4: Pregunta = new Pregunta();
        p4.nombre = "PREGUNTA 4";
        p4.descripcion = "Determina el orden correcto";
        p4.respuesta = "b";
        p4.imagen = "./assets/images/1.png";

        let p5: Pregunta = new Pregunta();
        p5.nombre = "PREGUNTA 5";
        p5.descripcion = "Determina la forma del diamantw";
        p5.respuesta = "d";
        p5.imagen = "./assets/images/4.png";

        let p6: Pregunta = new Pregunta();
        p6.nombre = "PREGUNTA 6";
        p6.descripcion = "Determina la forma de la figura";
        p6.respuesta = "b";
        p6.imagen = "./assets/images/8.png";
       

        this.data = [];
        this.data.push(p1);
        this.data.push(p2);
        this.data.push(p3);
        this.data.push(p4);
        this.data.push(p5);
        this.data.push(p6);


    }
}