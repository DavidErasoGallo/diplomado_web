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
var user_1 = require("./shared/user");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUsers = function () {
        if (this.users == null) {
            this.users = [];
            var u1 = new user_1.User();
            u1.name = "David Eraso";
            u1.age = 30;
            u1.birthday = new Date("1989-11-17");
            u1.indentity = 123;
            u1.type = "admin";
            u1.cash = 10000;
            var u2 = new user_1.User();
            u2.name = "Dario Chamorro";
            u2.age = 45;
            u2.birthday = new Date("1984-04-20");
            u2.indentity = 456;
            u2.type = "supervisor";
            u2.cash = 29000;
            var u3 = new user_1.User();
            u3.name = "Andrea Lopez";
            u3.age = 26;
            u3.birthday = new Date("1993-09-05");
            u3.indentity = 789;
            u3.type = "aux";
            u3.cash = 50000;
            this.users.push(u1);
            this.users.push(u2);
            this.users.push(u3);
        }
        return this.users;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map