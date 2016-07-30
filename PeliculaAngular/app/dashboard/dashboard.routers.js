"use strict";
var dashboard_component_1 = require("./dashboard.component");
var movie_list_component_1 = require("../movies/movie-list/movie-list.component");
exports.routerDashboard = [
    { path: "dashboard", component: dashboard_component_1.DashboardComponent,
        children: [
            { path: "", redirectTo: "genre/53", pathMatch: "full" },
            { path: "genre/:genre", component: movie_list_component_1.MovieListComponent }
        ] }
];
//# sourceMappingURL=dashboard.routers.js.map