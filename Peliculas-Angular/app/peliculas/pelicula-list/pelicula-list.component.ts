import {Component} from "@angular/core"
import {PeliculaService} from "../shared/pelicula.service"
import {Pelicula} from "../shared/pelicula"
import {PeliculaComponent} from "./pelicula.component"

@Component({
    selector: "pe-peliculas",
    //template:"<h1>Peliculas</h1>"
    templateUrl: "./app/peliculas/pelicula-list/pelicula-list.component.html",
    providers: [PeliculaService],
    directives:[PeliculaComponent]
})
export class PeliculaListComponent {

    data: Pelicula[];

    constructor(private service: PeliculaService) {
        this.data = null;


    }

    loadData() {
        this.data = this.service.getAll();
    }

    deletePelicula(index:number){
        this.data.splice(index,1);
    }
}