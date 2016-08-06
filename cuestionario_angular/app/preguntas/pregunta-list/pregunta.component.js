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
var pregunta_1 = require("../shared/pregunta");
var PreguntaComponent = (function () {
    function PreguntaComponent() {
        this.del = new core_1.EventEmitter();
    }
    PreguntaComponent.prototype.delete = function () {
        this.del.emit(this.index);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', pregunta_1.Pregunta)
    ], PreguntaComponent.prototype, "peli", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PreguntaComponent.prototype, "index", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PreguntaComponent.prototype, "del", void 0);
    PreguntaComponent = __decorate([
        core_1.Component({
            selector: "pe-peli",
            templateUrl: "./app/preguntas/pregunta-list/pregunta.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], PreguntaComponent);
    return PreguntaComponent;
}());
exports.PreguntaComponent = PreguntaComponent;
//# sourceMappingURL=pregunta.component.js.map