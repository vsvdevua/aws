import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aws';

constructor(private router: Router, private service: AuthService) {
  }


  signOut(): void {
    this.service.signOut().then(() => {
    
      this.router.navigate(['/']);
    }).catch((error) => {
      console.log(error);
    })

  }
}
