import {AppUrls, Movie} from "./index";
import {Observable} from "rxjs/observable";
import {Http, Response} from "@angular/http";

import {Injectable} from '@angular/core';

@Injectable()
export class MovieService {

     data:Movie[];

    constructor(private http: Http, private urls: AppUrls) {
        this.data = [];
    }

   loadMovies(genre:number){
       this.getMoviesByGenre(genre).subscribe(
           res => this.data =res,
           err => console.log(err)
       );
   }

    private getMoviesByGenre(genre: number):Observable<Movie[]> {
        let url: string = this.urls.urlByMovieGenre(genre, "2016");
        return this.http.get(url).map(this.processResponse).catch(this.handleError);
    }

    private processResponse(res: Response) {
        let body = res.json();
        body = body.results;
        return body;
    }

    private handleError(err: any) {
        return Observable.throw(err);
    }
}