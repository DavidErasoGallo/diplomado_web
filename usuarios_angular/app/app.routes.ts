import {provideRouter, RouterConfig} from '@angular/router';
import {UserComponent} from "./users/users.component";

const routes:RouterConfig = [
    {path:"**", component:UserComponent}
];

export const appRouterProviders = [provideRouter(routes)];