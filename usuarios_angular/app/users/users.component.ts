import {Component} from "@angular/core";
import {CurrencyPipe, DecimalPipe} from "@angular/common";

@Component({
    templateUrl: "./app/users/users.component.html",
    pipes: [CurrencyPipe, DecimalPipe]
})
export class UserComponent{

}