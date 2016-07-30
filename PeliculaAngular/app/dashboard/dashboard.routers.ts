import {RouterConfig} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {MovieListComponent} from "../movies/movie-list/movie-list.component";

export const routerDashboard: RouterConfig = [
    { path: "dashboard", component: DashboardComponent, 
    children:[
        {path:"", redirectTo:"genre/53", pathMatch:"full"},
        {path:"genre/:genre", component:MovieListComponent}
    ] }
];