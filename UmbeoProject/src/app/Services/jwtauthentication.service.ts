import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URI } from '../app.constant';
export const USER= 'auth-user';
export const TOKEN='auth-token';


@Injectable({
  providedIn: 'root'
})
export class JWTAuthenticationService {

  b:any;

  constructor(private _http: HttpClient) { }

  executeJWTAuthenticationService(username:any,password:any):any{

    return  this._http.post<any>(`${URI}/authenticate`,{
      username,
      password
    }).pipe(map(data=>{
      sessionStorage.setItem(USER,username);
      sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
      return data;
    }));
  }

  RegisteringUsers(data:any):any{
    return this._http.post(`${URI}/otpgenerated`,data);
  }


  deleteForOtp(data:any):any{
    return this._http.post(`${URI}/deleteForOtp`,data);
  }


  isAuthenticated(){
    let user = sessionStorage.getItem(USER);
    return !(user==null);
  }
  getAuthUser():any{
    return sessionStorage.getItem(USER);
  }

  registerotp(data:any):any{
    return this._http.post(`${URI}/register`,data);
  }

  getByUsername():any{
    let username = sessionStorage.getItem('auth-user');
    const u= { "username": username}
    console.log(u)
    return this._http.post(`${URI}/getUsername`,u);
  }

  changePassword(data:any):any{
    return this._http.post(`${URI}/changePassword`,data);
  }


  forgotPassword(data:any):any{
    return this._http.post(`${URI}/forgotPassword`,data);
  }


  addRoom(room:any, use:any):any{
    let username = sessionStorage.getItem('auth-user');
    return this._http.post(`${URI}/addRooms`,{
      "username":username,
      "room":room,
      "name":use
    });
  }

  joinRoom(room:any, use:any):any{
    let username = sessionStorage.getItem('auth-user');
    return this._http.post(`${URI}/joinRooms`,{
      "username":username,
      "room":room,
      "name":use
    })
  }



  // executeAuthenticationService(username:any,password:any):any{
  //   let basicAuthHeader= "Basic "+window.btoa(username+':'+ password);
  //   let headers= new HttpHeaders({
  //     Authorization: basicAuthHeader
  //   })
  //   return  this._http.get<AuthenticationBean>(`${URI}/basicAuth`,{headers}).pipe(map(data=>{
  //     sessionStorage.setItem(USER,username);
  //     sessionStorage.setItem(TOKEN,basicAuthHeader);
  //     return data;
  //   }));
  // }

  getAuthenticatedUser():any{
    return sessionStorage.getItem(USER);
  }

  getAuthenticationToken():any{
    return sessionStorage.getItem(TOKEN);
  }

  logout(){
    sessionStorage.removeItem(USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean{
  constructor(public message:string) { }
}
