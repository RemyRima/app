import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule }    from '@angular/http';
import {LoginComponent } from './app.login';
import {ProfileComponent } from './app.profile';
import {RoleComponent } from './app.role';
import {ViewingUserComponent } from './app.viewingUser';
import {PageDefault } from './app.pagedefault';
import {routing} from './app.routing';
import {RegisterComponent } from './app.register';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,routing 
    ],
    declarations: [
        AppComponent, LoginComponent, PageDefault, RegisterComponent, ProfileComponent, ViewingUserComponent, RoleComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }