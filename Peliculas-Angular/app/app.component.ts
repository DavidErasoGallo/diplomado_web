import {Component, OnInit} from "@angular/core";
import {Router,ROUTER_DIRECTIVES} from '@angular/router';
//import {PeliculaComponent} from './peliculas/pelicula.component';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector:"my-app",
  template:"<router-outlet></router-outlet>",
  //template:"<pe-peliculas></pe-peliculas>",
  directives:[ROUTER_DIRECTIVES]
  //directives:[ROUTER_DIRECTIVES, PeliculaComponent]
})
export class AppComponent {}
