import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { JWTAuthenticationService } from '../jwtauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorJwtService implements HttpInterceptor {

  constructor( private jwtAuthenticationService : JWTAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let authenticationToken = this.jwtAuthenticationService.getAuthenticationToken();
    let username = this.jwtAuthenticationService.getAuthenticatedUser();

    let basicAuthHeader = authenticationToken;
    if(authenticationToken && username)
    {
      request= request.clone({
        setHeaders:{
          Authorization: basicAuthHeader
        }
      })
    }
    return next.handle(request);
  }
}
