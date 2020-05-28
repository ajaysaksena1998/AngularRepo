import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JWTAuthenticationService } from '../jwtauthentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor( private jwtAuthentication : JWTAuthenticationService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(this.jwtAuthentication.isAuthenticated()){
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
