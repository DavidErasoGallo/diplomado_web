import {Component, OnInit} from "@angular/core";
import {Router,ROUTER_DIRECTIVES} from '@angular/router';
import {HelloComponent} from "./hello-world/hello.component";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector:"my-app",
  template:"<he-hello-world></he-hello-world>",
  directives:[ROUTER_DIRECTIVES,HelloComponent]
})
export class AppComponent {}
