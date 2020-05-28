import { Component, OnInit } from '@angular/core';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user:any;
  password:any;


  constructor( private jwtService: JWTAuthenticationService, private router:Router) { }

  ngOnInit(): void {

    this.user= this.jwtService.getAuthUser();

  }

  changePassword():any{

    this.jwtService.changePassword({
      "username":this.user,
      "password":this.password
    }).subscribe((response:any)=>{
      if(response==true){
        this.router.navigate(['welcome']);
      }
      else{
        console.log("Some Error Occurred");
      }
    },(error:any)=>{
      console.log(error);
    }
    )

  }

}
