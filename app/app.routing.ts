import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {AppComponent } from './app.component';
import {LoginComponent } from './app.login';
import {RegisterComponent } from './app.register';
import {ViewingUserComponent } from './app.viewingUser';
import {ProfileComponent } from './app.profile';
import {RoleComponent } from './app.role';
import {PageDefault } from './app.pagedefault';
import { HttpModule }  from '@angular/http';
import { NgModule }      from '@angular/core';

const subrouters: Routes=[
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'viewingUser', component: ViewingUserComponent },
    { path: 'role', component: RoleComponent },
    {path: '',redirectTo: '/login', pathMatch: 'full'},
    {path:'**',component:PageDefault},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(subrouters);

