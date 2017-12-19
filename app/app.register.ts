import { Component }      from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

export class UserModel {
    Email:string;
    UserName:string;
    Password:string;
    ConfirmPassword:string;
    FirstName:string;
    LastName:string;
}


// This component consumes the re-usable service.
@Component({
    selector: 'my-app',
    templateUrl: './app/app.register.html',
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class RegisterComponent {
    userModel:UserModel;
    remoteService: MyRemoteService;

    // register variables.
    token: string;
    registerResponse: string;

    // all users variables.
    allUsersBulkResponse:string;

    // Since using a provider above we can receive service.
    constructor(_remoteService: MyRemoteService) {
        this.userModel = new UserModel();
        this.remoteService = _remoteService;
    }
   
    convertObjectToString (obj) {
        var str = '';
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + '::' + obj[p] + ' *** ';
            }
        }
        return str;
    }

    registerUser() {  
        this.remoteService.createUser(this.userModel)
            // Subscribe to observable.
            .subscribe(

            // Success.
            data => {
                this.token    = data["id"];
                this.registerResponse = this.convertObjectToString(data);
                console.log(data)
            },
            // Error.
            error => {
                alert(error)
            },
            // Final instructions.
            () => {
                console.log("Finished")
            });
    }
}