import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, MaybeAsync, GuardResult } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AguardService implements CanActivate {

  constructor(private auth:AuthService, private router: Router) { }

// @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    
    const requiredGroup = route.data['groups'] as string[];
  

    if (!this.auth.isAuthent) {
      this.auth.login();
     
    }

    console.log("lenght:  "  + requiredGroup.length);
    if(requiredGroup.length==0){
      return false;
    }

    console.log('User Groups:', this.auth.groups);
    console.log('Required Groups:', requiredGroup);
    if (requiredGroup.some(group => this.auth.groups.includes(group))) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
