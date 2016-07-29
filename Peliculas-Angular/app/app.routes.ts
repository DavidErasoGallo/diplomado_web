import {provideRouter, RouterConfig} from '@angular/router';
import {PeliculaListComponent} from './peliculas/pelicula-list/pelicula-list.component'
import {NotFoundComponent} from "./notfound/notfound.component";
const routes:RouterConfig = [
    
    {path:"",redirectTo:"peliculas", pathMatch:"full"},
    {path:"peliculas", component:PeliculaListComponent},
    {path: "**", component:NotFoundComponent}
];

export const appRouterProviders = [provideRouter(routes)];