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
var pelicula_service_1 = require("../shared/pelicula.service");
var pelicula_component_1 = require("./pelicula.component");
var PeliculaListComponent = (function () {
    function PeliculaListComponent(service) {
        this.service = service;
        this.data = null;
    }
    PeliculaListComponent.prototype.loadData = function () {
        this.data = this.service.getAll();
    };
    PeliculaListComponent.prototype.deletePelicula = function (index) {
        this.data.splice(index, 1);
    };
    PeliculaListComponent = __decorate([
        core_1.Component({
            selector: "pe-peliculas",
            //template:"<h1>Peliculas</h1>"
            templateUrl: "./app/peliculas/pelicula-list/pelicula-list.component.html",
            providers: [pelicula_service_1.PeliculaService],
            directives: [pelicula_component_1.PeliculaComponent]
        }), 
        __metadata('design:paramtypes', [pelicula_service_1.PeliculaService])
    ], PeliculaListComponent);
    return PeliculaListComponent;
}());
exports.PeliculaListComponent = PeliculaListComponent;
//# sourceMappingURL=pelicula-list.component.js.map