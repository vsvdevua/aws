import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'sv-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private auth:AuthService) { }

  isAuthent = false;
  email:string = '';
  groups:string[] =[];

  ngOnInit() {
    this.groups = this.auth.groups;
    this.isAuthent = this.auth.isAuthent;
    this.email = this.auth.email;
  }


}








