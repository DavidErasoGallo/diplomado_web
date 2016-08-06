import {Component, OnInit} from "@angular/core";
import {Router,ROUTER_DIRECTIVES} from '@angular/router';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector:"my-app",
  template:"<router-outlet></router-outlet>",
  directives:[ROUTER_DIRECTIVES]
})
export class AppComponent {}
