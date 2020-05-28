import { Component, OnInit } from '@angular/core';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  username:any;

  error:any=false;

  x:string="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  index:any;

  upp:any;
  c:any;
  password:string=""


  constructor( private jwtService: JWTAuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  generatePassword():any{

    for(this.index=1; this.index<=10; this.index++){
      this.c = Math.floor((Math.random()*(this.x.length))+0);
      this.password+=this.x.charAt(this.c);
    }

  }

  forgotPassword():any{

    this.generatePassword();

    this.jwtService.forgotPassword({
      "username":this.username,
      "password":this.password
    }).subscribe((response:any)=>{
      if(response==true){
        this.error=false;
        this.router.navigate(['login']);
      }
      else{
        this.error=true;
      }
    },(error:any)=>{
      console.log(error);
    })



  }


}
