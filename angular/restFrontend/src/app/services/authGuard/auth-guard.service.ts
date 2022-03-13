import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserServiceService } from '../users/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

   constructor(private router: Router,private userService :UserServiceService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.userService.isAuthenticated() == true) {
      return true;
    } 
    this.router.navigate(['']);
    return false;
  }
}
