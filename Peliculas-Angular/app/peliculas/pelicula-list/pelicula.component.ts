import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Pelicula} from "../shared/pelicula";

@Component({
    selector: "pe-peli",
    templateUrl: "./app/peliculas/pelicula-list/pelicula.component.html"
})
export class PeliculaComponent{
    @Input() peli:Pelicula;
    @Input() index:number;

    @Output() del:EventEmitter<number> = new EventEmitter<number>();
    delete(){
        this.del.emit(this.index);
    }
}