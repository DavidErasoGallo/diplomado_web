import {provideRouter, RouterConfig} from '@angular/router';
import {PreguntaListComponent} from './preguntas/pregunta-list/pregunta-list.component'
import {NotFoundComponent} from "./notfound/notfound.component";
const routes:RouterConfig = [
    
    {path:"",redirectTo:"preguntas", pathMatch:"full"},
    {path:"preguntas", component:PreguntaListComponent},
    {path: "**", component:NotFoundComponent}
];

export const appRouterProviders = [provideRouter(routes)];