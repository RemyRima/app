"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var app_login_1 = require("./app.login");
var app_profile_1 = require("./app.profile");
var app_role_1 = require("./app.role");
var app_viewingUser_1 = require("./app.viewingUser");
var app_pagedefault_1 = require("./app.pagedefault");
var app_routing_1 = require("./app.routing");
var app_register_1 = require("./app.register");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule, app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent, app_login_1.LoginComponent, app_pagedefault_1.PageDefault, app_register_1.RegisterComponent, app_profile_1.ProfileComponent, app_viewingUser_1.ViewingUserComponent, app_role_1.RoleComponent,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map