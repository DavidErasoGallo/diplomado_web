"use strict";
var router_1 = require('@angular/router');
var pelicula_list_component_1 = require('./peliculas/pelicula-list/pelicula-list.component');
var notfound_component_1 = require("./notfound/notfound.component");
var routes = [
    { path: "", redirectTo: "peliculas", pathMatch: "full" },
    { path: "peliculas", component: pelicula_list_component_1.PeliculaListComponent },
    { path: "**", component: notfound_component_1.NotFoundComponent }
];
exports.appRouterProviders = [router_1.provideRouter(routes)];
//# sourceMappingURL=app.routes.js.map