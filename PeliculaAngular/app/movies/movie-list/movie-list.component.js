"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var movie_component_1 = require("./movie.component");
var index_1 = require("../../shared/index");
var router_1 = require("@angular/router");
var MovieListComponent = (function () {
    function MovieListComponent(service, route) {
        this.service = service;
        this.route = route;
        var genre = +route.snapshot.params["genre"];
        service.loadMovies(genre);
    }
    MovieListComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/movies/movie-list/movie-list.component.html",
            directives: [movie_component_1.MovieComponent]
        }), 
        __metadata('design:paramtypes', [index_1.MovieService, router_1.ActivatedRoute])
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map