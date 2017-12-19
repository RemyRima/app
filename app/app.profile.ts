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

export class ChangePasswordModel {
     OldPassword:string;
     NewPassword:string;
     ConfirmPassword:string;
     authToken:string;
}

// This component consumes the re-usable service.
@Component({
    selector: 'my-app',
    templateUrl: './app/app.profile.html',
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class ProfileComponent {
    userModel:UserModel;
    remoteService: MyRemoteService;

    // password change variables.
    ch_oldPwd:string;
    ch_newPwd:string;
    ch_confirmPassword:string;
    bulkPasswordChangeResponse:string;

    // all users variables.
    allUsersBulkResponse:string;

    // Since using a provider above we can receive service.
    constructor(_remoteService: MyRemoteService) {
        this.userModel = new UserModel();
        this.remoteService = _remoteService;
    }

    changePassword() {
        let pwdChangeModel = new ChangePasswordModel();
        pwdChangeModel.ConfirmPassword = this.ch_confirmPassword;
        pwdChangeModel.NewPassword = this.ch_newPwd;
        pwdChangeModel.OldPassword = this.ch_oldPwd;
        pwdChangeModel.authToken = this.remoteService.getToken();

        this.remoteService.changePassword(pwdChangeModel)
        // Subscribe to observable.
        .subscribe(

        // Success.
        data => {
         //   this.loginResponse = this.convertObjectToString(data);
            console.log(data);
            this.bulkPasswordChangeResponse = this.convertObjectToString(data);
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