"use strict";
var router_1 = require('@angular/router');
var users_component_1 = require("./users/users.component");
var routes = [
    { path: "**", component: users_component_1.UserComponent }
];
exports.appRouterProviders = [router_1.provideRouter(routes)];
//# sourceMappingURL=app.routes.js.map