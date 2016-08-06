import {Component} from "@angular/core";
import {CurrencyPipe, DecimalPipe} from "@angular/common";
import {UserService} from "./users.service";
import {User} from "./shared/user";
import {BirthDayPipe} from "./shared/birthday.pipe";

@Component({
    templateUrl: "./app/users/users.component.html",
    providers: [UserService],
    pipes: [CurrencyPipe, DecimalPipe, BirthDayPipe]
})
export class UserComponent {
    
    data:User[];

    constructor(private service: UserService) {
        this.data = service.getUsers();
    }
}