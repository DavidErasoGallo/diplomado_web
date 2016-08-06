import {Injectable} from "@angular/core";
import {User} from "./shared/user";

@Injectable()
export class UserService {
    users: User[];

    getUsers() {
        if (this.users == null) {
            this.users = [];

            let u1:User = new User();
            u1.name = "David Eraso";
            u1.age = 30;
            u1.birthday = new Date("1989-11-17");
            u1.indentity = 123;
            u1.type = "admin";
            u1.cash = 10000;

            let u2:User = new User();
            u2.name = "Dario Chamorro";
            u2.age = 45;
            u2.birthday = new Date("1984-04-20");
            u2.indentity = 456;
            u2.type = "supervisor";
            u2.cash = 29000;

            let u3:User = new User();
            u3.name = "Andrea Lopez";
            u3.age = 26;
            u3.birthday = new Date("1993-09-05");
            u3.indentity = 789;
            u3.type = "aux";
            u3.cash = 50000;
            
           this.users.push(u1);
           this.users.push(u2);
           this.users.push(u3);
           
        }

        return this.users;
    }
}