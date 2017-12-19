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
    templateUrl: './app/app.viewingUser.html',
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class ViewingUserComponent {
    userModel:UserModel;
    remoteService: MyRemoteService;
    usersBulkResponse:string;

    // register variables.
    token: string;
    registerResponse: string;

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
        this.authToken=this.remoteService.getToken();
    }

    getUserByName(userName) {
        
        this.remoteService.getUserByName(this.authToken, userName)
        // Subscribe to observable.
        .subscribe(

        // Success.
        data => {
            console.log(data);
           /*this.users=data; */
               this.allUsersBulkResponse += '***'
               + data['email']+ data['roles']+data['fullName']+data['userName']; 
           
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

    getUsers() {
        this.remoteService.getUsers(this.authToken)
        // Subscribe to observable.
        .subscribe(

        // Success.
        data => {
            console.log(data);
            /* this.users=data*/
           for (let i = 0; i < data.length; i++) { 
               this.allUsersBulkResponse += '***'
               + data[i]['email'] + data[i]['roles']+ data[i]['fullName'] + data[i]['userName']; 
            }
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