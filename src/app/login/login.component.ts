import { Component } from '@angular/core';
import { IUser } from '../model/iuser';
import { Router } from '@angular/router';


@Component({
  selector: 'sv-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: IUser = {} as IUser;

  constructor(private router: Router
   // , private service: AuthService
  ) {
  }

  public signIn(): void {
  // this.service.signIn(this.user).then(() => {
  //    this.router.navigate(['/orders']);
  //  }).catch((error) => {
  //    console.log(error);
  //  })

  }

}
