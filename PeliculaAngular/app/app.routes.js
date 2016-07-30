"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require("./login/login.component");
var notfound_component_1 = require("./notfound/notfound.component");
//import {DashboardComponent} from "./dashboard/dashboard.component";
var dashboard_routers_1 = require("./dashboard/dashboard.routers");
var routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent }
].concat(dashboard_routers_1.routerDashboard, [
    { path: "**", component: notfound_component_1.NotFoundComponent }
]);
exports.appRouterProviders = [router_1.provideRouter(routes)];
//# sourceMappingURL=app.routes.js.map