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
var pregunta_1 = require("./pregunta");
var PreguntaService = (function () {
    function PreguntaService() {
    }
    PreguntaService.prototype.getAll = function () {
        this.loadPreguntas();
        return this.data;
    };
    PreguntaService.prototype.getPregunta = function (index) {
        return this.data[index];
    };
    PreguntaService.prototype.addPregunta = function (pregunta) {
        this.data.push(pregunta);
    };
    PreguntaService.prototype.loadPreguntas = function () {
        var p1 = new pregunta_1.Pregunta();
        p1.nombre = "PREGUNTA 1";
        p1.descripcion = "Determina la forma del cuadrado";
        p1.respuesta = "d";
        p1.imagen = "./assets/images/7.png";
        var p2 = new pregunta_1.Pregunta();
        p2.nombre = "PREGUNTA 2";
        p2.descripcion = "Determina la forma de la figura";
        p2.respuesta = "a";
        p2.imagen = "./assets/images/2.png";
        var p3 = new pregunta_1.Pregunta();
        p3.nombre = "PREGUNTA 3";
        p3.descripcion = "Determina el orden correcto";
        p3.respuesta = "b";
        p3.imagen = "./assets/images/5.png";
        var p4 = new pregunta_1.Pregunta();
        p4.nombre = "PREGUNTA 4";
        p4.descripcion = "Determina el orden correcto";
        p4.respuesta = "b";
        p4.imagen = "./assets/images/1.png";
        var p5 = new pregunta_1.Pregunta();
        p5.nombre = "PREGUNTA 5";
        p5.descripcion = "Determina la forma del diamantw";
        p5.respuesta = "d";
        p5.imagen = "./assets/images/4.png";
        var p6 = new pregunta_1.Pregunta();
        p6.nombre = "PREGUNTA 6";
        p6.descripcion = "Determina la forma de la figura";
        p6.respuesta = "b";
        p6.imagen = "./assets/images/8.png";
        this.data = [];
        this.data.push(p1);
        this.data.push(p2);
        this.data.push(p3);
        this.data.push(p4);
        this.data.push(p5);
        this.data.push(p6);
    };
    PreguntaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PreguntaService);
    return PreguntaService;
}());
exports.PreguntaService = PreguntaService;
//# sourceMappingURL=pregunta.service.js.map