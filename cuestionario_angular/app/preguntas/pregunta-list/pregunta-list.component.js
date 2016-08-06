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
var pregunta_service_1 = require("../shared/pregunta.service");
var PreguntaListComponent = (function () {
    function PreguntaListComponent(service) {
        this.service = service;
        this.data = null;
        this.data = this.service.getAll();
        this.respuestas = new Array(this.data.length);
    }
    PreguntaListComponent.prototype.calificar = function () {
        var m;
        var b;
        m = 0;
        b = 0;
        for (var i = 0; i < this.data.length; i++) {
            if (this.respuestas[i] == this.data[i].respuesta) {
                b++;
            }
            else {
                m++;
            }
            var usr = document.getElementById("res");
            usr.innerHTML = '<div id="res" class="row"><div class="col-md-5 ma"><div class="alert alert-success" role="alert">' +
                '<strong>' + b + '</strong> Pregunta(s) Correctas</div></div><div class="col-md-5 ma"><div class="alert alert-danger" role="alert">' +
                '<strong>' + m + '</strong> Pregunta(s) Incorrectas</div></div></div>';
        }
    };
    PreguntaListComponent.prototype.getValue = function (i, value) {
        this.respuestas[i] = value;
        console.log("i: " + i + " valor: " + value);
    };
    PreguntaListComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/preguntas/pregunta-list/pregunta-list.component.html",
            providers: [pregunta_service_1.PreguntaService]
        }), 
        __metadata('design:paramtypes', [pregunta_service_1.PreguntaService])
    ], PreguntaListComponent);
    return PreguntaListComponent;
}());
exports.PreguntaListComponent = PreguntaListComponent;
//# sourceMappingURL=pregunta-list.component.js.map