import { Component, inject, Injectable, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  groups:string[] =[];
  
  isAuthent = false;

  email:string = '';

  accessToken ='';

  constructor(private service:OidcSecurityService){

    const configuration$ = this.service.getConfiguration();
  
    const userData$ = this.service.userData$;
    
      this.service
        .checkAuth()
        .subscribe((loginResponse: LoginResponse) => {
          const { isAuthenticated, userData, accessToken, idToken, configId } =
            loginResponse;
    
          this.isAuthent =isAuthenticated;
          this.email = userData.email;
          console.warn('idToken:', idToken);
          this.accessToken = accessToken;

          console.log('accessToken:', accessToken);
          
          //  console.warn('User Groups:', this.groups);
           // @ts-ignore
            this.groups = jwtDecode(idToken)['cognito:groups'] || [];
          //  console.warn('User Groups:', this.groups);
  
          /*...*/
        });
  }

  
    login() {
      this.service.authorize();
    }
  
    logout() {
      this.service
        .logoff()
        .subscribe((result) => console.log(result));
    }

   
}
