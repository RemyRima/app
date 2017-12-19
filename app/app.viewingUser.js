"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_myremoteservice_1 = require("./app.myremoteservice");
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());
exports.UserModel = UserModel;
// This component consumes the re-usable service.
var ViewingUserComponent = (function () {
    // Since using a provider above we can receive service.
    function ViewingUserComponent(_remoteService) {
        this.userModel = new UserModel();
        this.remoteService = _remoteService;
        this.authToken = this.remoteService.getToken();
    }
    ViewingUserComponent.prototype.getUserByName = function (userName) {
        var _this = this;
        this.remoteService.getUserByName(this.authToken, userName)
            .subscribe(
        // Success.
        function (data) {
            console.log(data);
            /*this.users=data; */
            _this.allUsersBulkResponse += '***'
                + data['email'] + data['roles'] + data['fullName'] + data['userName'];
        }, 
        // Error.
        function (error) {
            alert(error);
        }, 
        // Final instructions.
        function () {
            console.log("Finished");
        });
    };
    ViewingUserComponent.prototype.getUsers = function () {
        var _this = this;
        this.remoteService.getUsers(this.authToken)
            .subscribe(
        // Success.
        function (data) {
            console.log(data);
            /* this.users=data*/
            for (var i = 0; i < data.length; i++) {
                _this.allUsersBulkResponse += '***'
                    + data[i]['email'] + data[i]['roles'] + data[i]['fullName'] + data[i]['userName'];
            }
        }, 
        // Error.
        function (error) {
            alert(error);
        }, 
        // Final instructions.
        function () {
            console.log("Finished");
        });
    };
    ViewingUserComponent.prototype.convertObjectToString = function (obj) {
        var str = '';
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + '::' + obj[p] + ' *** ';
            }
        }
        return str;
    };
    return ViewingUserComponent;
}());
ViewingUserComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.viewingUser.html',
        // Providers allow us to inject an object instance through the constructor.
        providers: [app_myremoteservice_1.MyRemoteService]
    }),
    __metadata("design:paramtypes", [app_myremoteservice_1.MyRemoteService])
], ViewingUserComponent);
exports.ViewingUserComponent = ViewingUserComponent;
//# sourceMappingURL=app.viewingUser.js.map