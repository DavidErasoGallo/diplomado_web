import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl:"./app/login/login.component.html"
})
export class LoginComponent{

    reg:boolean;

    constructor(private router:Router){
        this.reg = false;
    }

    switchToRegister(){
        this.reg = true;
    }

    switchToLogin(){
        this.reg = false;
    }

    login(){
        this.router.navigate(["dashboard"]);
    }

    signing(){

    }

}