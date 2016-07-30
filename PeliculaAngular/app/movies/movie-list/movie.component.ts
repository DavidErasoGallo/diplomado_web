import {Component, Input, OnInit} from "@angular/core";
import {Movie, AppUrls} from "../../shared/index"

@Component({
    selector:"mo-movie",
    templateUrl:"./app/movies/movie-list/movie.component.html"
})
export class MovieComponent implements OnInit{
    @Input() movie:Movie;
    urlI:String;
 

    constructor(private url:AppUrls){
        
    }

    ngOnInit(){
        this.urlI = this.url.urlbyImageId(this.movie.poster_path);
    }

    setStyles() {
        let styles = { 'background':"url('"+this.urlI+"')"    
                    };
        return styles;
   }
}