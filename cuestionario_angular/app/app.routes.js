"use strict";
var router_1 = require('@angular/router');
var pregunta_list_component_1 = require('./preguntas/pregunta-list/pregunta-list.component');
var notfound_component_1 = require("./notfound/notfound.component");
var routes = [
    { path: "", redirectTo: "preguntas", pathMatch: "full" },
    { path: "preguntas", component: pregunta_list_component_1.PreguntaListComponent },
    { path: "**", component: notfound_component_1.NotFoundComponent }
];
exports.appRouterProviders = [router_1.provideRouter(routes)];
//# sourceMappingURL=app.routes.js.map