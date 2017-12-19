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
var LoginModel = (function () {
    function LoginModel() {
        this.grant_type = 'password';
    }
    return LoginModel;
}());
exports.LoginModel = LoginModel;
// This component consumes the re-usable service.
var LoginComponent = (function () {
    // Since using a provider above we can receive service.
    function LoginComponent(_remoteService) {
        this.userModel = new UserModel();
        this.remoteService = _remoteService;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var loginModel = new LoginModel();
        loginModel.password = this.password;
        loginModel.username = this.username;
        this.remoteService.login(loginModel)
            .subscribe(
        // Success.
        function (data) {
            _this.loginResponse = _this.convertObjectToString(data);
            console.log(data);
            _this.authToken = data["access_token"];
            _this.remoteService.saveToken(data["access_token"], _this.username);
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
    LoginComponent.prototype.convertObjectToString = function (obj) {
        var str = '';
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + '::' + obj[p] + ' *** ';
            }
        }
        return str;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: './app/app.login.html',
        // Providers allow us to inject an object instance through the constructor.
        providers: [app_myremoteservice_1.MyRemoteService]
    }),
    __metadata("design:paramtypes", [app_myremoteservice_1.MyRemoteService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=app.login.js.map