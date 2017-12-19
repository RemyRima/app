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
var AssignRole = (function () {
    function AssignRole() {
    }
    return AssignRole;
}());
exports.AssignRole = AssignRole;
// This component consumes the re-usable service.
var RoleComponent = (function () {
    // Since using a provider above we can receive service.
    function RoleComponent(_remoteService) {
        this.userModel = new UserModel();
        this.remoteService = _remoteService;
        this.authToken = this.remoteService.getToken();
    }
    RoleComponent.prototype.assignUserRole = function () {
        var assignRole = new AssignRole();
        assignRole.Email = this.email;
        assignRole.Role = this.role;
        assignRole.authToken = this.remoteService.getToken();
        this.remoteService.assignUserRole(assignRole)
            .subscribe(
        // Success.
        function (data) {
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
    return RoleComponent;
}());
RoleComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.role.html',
        // Providers allow us to inject an object instance through the constructor.
        providers: [app_myremoteservice_1.MyRemoteService]
    }),
    __metadata("design:paramtypes", [app_myremoteservice_1.MyRemoteService])
], RoleComponent);
exports.RoleComponent = RoleComponent;
//# sourceMappingURL=app.role.js.map