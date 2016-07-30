import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {MovieService} from "../shared/index";

@Component({
    templateUrl:"./app/dashboard/dashboard.component.html",
    directives:[ROUTER_DIRECTIVES],
    providers:[MovieService]
})
export class DashboardComponent{

    constructor(private router:Router, private service:MovieService){

    }

    //selectMenu(index:number){}
    selectProfile(index:number){
        if(index == 1){
            this.router.navigate(["login"]);
        }         
    }

    loadGenre(genre:number){
        this.service.loadMovies(genre);
    }
}