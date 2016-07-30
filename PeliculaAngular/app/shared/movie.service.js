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
var index_1 = require("./index");
var observable_1 = require("rxjs/observable");
var http_1 = require("@angular/http");
var core_1 = require('@angular/core');
var MovieService = (function () {
    function MovieService(http, urls) {
        this.http = http;
        this.urls = urls;
        this.data = [];
    }
    MovieService.prototype.loadMovies = function (genre) {
        var _this = this;
        this.getMoviesByGenre(genre).subscribe(function (res) { return _this.data = res; }, function (err) { return console.log(err); });
    };
    MovieService.prototype.getMoviesByGenre = function (genre) {
        var url = this.urls.urlByMovieGenre(genre, "2016");
        return this.http.get(url).map(this.processResponse).catch(this.handleError);
    };
    MovieService.prototype.processResponse = function (res) {
        var body = res.json();
        body = body.results;
        return body;
    };
    MovieService.prototype.handleError = function (err) {
        return observable_1.Observable.throw(err);
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, index_1.AppUrls])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map