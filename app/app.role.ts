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
export class AssignRole {
    Email:string;
    Role:string;
    Id:string;
    authToken:string;
}

// This component consumes the re-usable service.
@Component({
    selector: 'my-app',
    templateUrl: './app/app.role.html',
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class RoleComponent {
    email:string;
    role:string;
    userModel:UserModel;
    remoteService: MyRemoteService;

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

    usersBulkResponse:string;

    // Since using a provider above we can receive service.
    constructor(_remoteService: MyRemoteService) {
        this.userModel = new UserModel();
        this.remoteService= _remoteService;
        this.authToken = this.remoteService.getToken();


    }

     assignUserRole() {
         let assignRole = new AssignRole();      
         assignRole.Email=this.email;
         assignRole.Role=this.role;
         assignRole.authToken=this.remoteService.getToken();
        this.remoteService.assignUserRole(assignRole)
        // Subscribe to observable.
        .subscribe(

        // Success.
        data => {
            console.log(data);
             
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