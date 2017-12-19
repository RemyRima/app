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
var RegisterComponent = (function () {
    // Since using a provider above we can receive service.
    function RegisterComponent(_remoteService) {
        this.userModel = new UserModel();
        this.remoteService = _remoteService;
    }
    RegisterComponent.prototype.convertObjectToString = function (obj) {
        var str = '';
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + '::' + obj[p] + ' *** ';
            }
        }
        return str;
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.remoteService.createUser(this.userModel)
            .subscribe(
        // Success.
        function (data) {
            _this.token = data["id"];
            _this.registerResponse = _this.convertObjectToString(data);
            console.log(data);
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
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.register.html',
        // Providers allow us to inject an object instance through the constructor.
        providers: [app_myremoteservice_1.MyRemoteService]
    }),
    __metadata("design:paramtypes", [app_myremoteservice_1.MyRemoteService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=app.register.js.map