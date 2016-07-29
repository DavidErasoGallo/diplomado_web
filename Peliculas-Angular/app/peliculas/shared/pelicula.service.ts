import {Injectable} from "@angular/core"
import {Pelicula} from "./pelicula"

@Injectable()
export class PeliculaService {

    data: Pelicula[];

    getAll() {
        if (this.data == null) {
            this.loadPeliculas();
        }
        return this.data;
    }

    getPelicula(index: number) {
        return this.data[index];
    }

    addPelicula(pelicula: Pelicula) {
        this.data.push(pelicula);
    }

    private loadPeliculas() {
        let p1: Pelicula = new Pelicula();
        p1.nombre = "Freddy";
        p1.genero = "Terror";
        p1.sinopsis = "La pelicula mas miedosa de la historia";
        p1.director = "David Eraso";
        p1.estreno = new Date();

        let p2: Pelicula = new Pelicula();
        p2.nombre = "Simpson";
        p2.genero = "Comedia";
        p2.sinopsis = "La pelicula mas graciosa de la historia";
        p2.director = "Homer Simpson";
        p2.estreno = new Date();

        let p3: Pelicula = new Pelicula();
        p3.nombre = "Accion Pura";
        p3.genero = "Accion";
        p3.sinopsis = "La pelicula mas entretenida de la historia";
        p3.director = "Brune Wayne";
        p3.estreno = new Date();

        this.data = [];
        this.data.push(p1);
        this.data.push(p2);
        this.data.push(p3);

    }
}