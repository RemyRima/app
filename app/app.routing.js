"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_login_1 = require("./app.login");
var app_register_1 = require("./app.register");
var app_viewingUser_1 = require("./app.viewingUser");
var app_profile_1 = require("./app.profile");
var app_role_1 = require("./app.role");
var app_pagedefault_1 = require("./app.pagedefault");
var subrouters = [
    { path: 'login', component: app_login_1.LoginComponent },
    { path: 'register', component: app_register_1.RegisterComponent },
    { path: 'profile', component: app_profile_1.ProfileComponent },
    { path: 'viewingUser', component: app_viewingUser_1.ViewingUserComponent },
    { path: 'role', component: app_role_1.RoleComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: app_pagedefault_1.PageDefault },
];
exports.routing = router_1.RouterModule.forRoot(subrouters);
//# sourceMappingURL=app.routing.js.map