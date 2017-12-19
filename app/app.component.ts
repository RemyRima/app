import { Component }      from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';
import { Router } from '@angular/router';



// This component consumes the re-usable service.
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class AppComponent {
    remoteService: MyRemoteService;


    // Since using a provider above we can receive service.
    constructor(private router:Router, _remoteService: MyRemoteService) {       
        this.remoteService = _remoteService;
    }

      logout() {
        this.remoteService.logout();
        this.router.navigate(['/login']);
    }  
}