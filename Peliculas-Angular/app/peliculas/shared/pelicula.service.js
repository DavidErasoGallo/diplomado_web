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
var pelicula_1 = require("./pelicula");
var PeliculaService = (function () {
    function PeliculaService() {
    }
    PeliculaService.prototype.getAll = function () {
        if (this.data == null) {
            this.loadPeliculas();
        }
        return this.data;
    };
    PeliculaService.prototype.getPelicula = function (index) {
        return this.data[index];
    };
    PeliculaService.prototype.addPelicula = function (pelicula) {
        this.data.push(pelicula);
    };
    PeliculaService.prototype.loadPeliculas = function () {
        var p1 = new pelicula_1.Pelicula();
        p1.nombre = "Freddy";
        p1.genero = "Terror";
        p1.sinopsis = "La pelicula mas miedosa de la historia";
        p1.director = "David Eraso";
        p1.estreno = new Date();
        var p2 = new pelicula_1.Pelicula();
        p2.nombre = "Simpson";
        p2.genero = "Comedia";
        p2.sinopsis = "La pelicula mas graciosa de la historia";
        p2.director = "Homer Simpson";
        p2.estreno = new Date();
        var p3 = new pelicula_1.Pelicula();
        p3.nombre = "Accion Pura";
        p3.genero = "Accion";
        p3.sinopsis = "La pelicula mas entretenida de la historia";
        p3.director = "Brune Wayne";
        p3.estreno = new Date();
        this.data = [];
        this.data.push(p1);
        this.data.push(p2);
        this.data.push(p3);
    };
    PeliculaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PeliculaService);
    return PeliculaService;
}());
exports.PeliculaService = PeliculaService;
//# sourceMappingURL=pelicula.service.js.map