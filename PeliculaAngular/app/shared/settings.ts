export class AppSettings {
    secret:string = "cualquiercosa"
};

export class AppUrls{
    
    key:string= "357a7cd84e31ba07c539d1d78c26662e";
    urlMovieBase ="http://api.themoviedb.org/3/discover/movie";
    urlImage = "http://image.tmdb.org/t/p/w500";

    urlByMovieGenre(genre:number, year:string){
        return this.urlMovieBase+"?with_genres="+genre+"&primary_release_year="+year+"&api_key="+this.key;
    }

    urlByTopMovies(year:string){
        return this.urlMovieBase+"??primary_release_year="+year+"&sort_by=vote_average.desc&api_key="+this.key;
    }

    urlbyImageId(img:string){
        return this.urlImage+img;
    }
}
