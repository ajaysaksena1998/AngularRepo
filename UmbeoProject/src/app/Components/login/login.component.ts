import { Component, OnInit } from '@angular/core';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  name:any;
  pass:any;
  password:any;
  invalidLogin:boolean;
  message:string="Please enter valid credentials";

  constructor( private _service: JWTAuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  handleJWTLogin():any{
    this._service.executeJWTAuthenticationService(this.username, this.password).subscribe((data:any)=>{
      console.log(data);
      this.invalidLogin=false;
      this.router.navigate(['welcome']);
    },
    (error:any)=>{
      console.log(error);
      this.invalidLogin=true;
    })
  }
}
