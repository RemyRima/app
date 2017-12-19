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

export class LoginModel {
    username:string;
    password:string;
    grant_type:string;

    constructor() {
        this.grant_type = 'password';
    }
}

// This component consumes the re-usable service.
@Component({

    templateUrl: './app/app.login.html',
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class LoginComponent {
    userModel:UserModel;
    remoteService: MyRemoteService;
    // login variables.
    username:string;
    password:string;
    grant_type:string;
    loginResponse;
    authToken:string;

    // all users variables.
    allUsersBulkResponse:string;

    // Since using a provider above we can receive service.
    constructor(_remoteService: MyRemoteService) {
        this.userModel = new UserModel();
        this.remoteService = _remoteService;
    }

    login() {
        let loginModel = new LoginModel();
        loginModel.password = this.password;
        loginModel.username = this.username;
        
        this.remoteService.login(loginModel)
                // Subscribe to observable.
                .subscribe(

                // Success.
                data => {
                    this.loginResponse = this.convertObjectToString(data);
                    console.log(data);
                    this.authToken = data["access_token"];
                    this.remoteService.saveToken(data["access_token"],this.username);
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
    
    convertObjectToString (obj) {
        var str = '';
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + '::' + obj[p] + ' *** ';
            }
        }
        return str;
    }
}