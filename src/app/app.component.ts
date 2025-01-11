import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
//import { AuthService } from './service/auth.service';

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'aws';

constructor(private router: Router, private auth:AuthService) {
  }


  signOut(): void {
this.auth.logout();
  }

  login() {
   this.auth.login();
    }
}
