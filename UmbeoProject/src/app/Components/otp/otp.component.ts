import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otp:any;
  error:any=false;
  upo:UPO;
  data:any;
  o:any;
  send:any;
  constructor( private ActiRouter: ActivatedRoute, private jwtService:JWTAuthenticationService, private router:Router) { }

  ngOnInit(): void {


    this.upo= new UPO("","","","");

    this.ActiRouter.queryParams.subscribe((response:any)=>{
      // this.upo.username= response.p1;
      // this.upo.password= response.p2;
      this.data=response;
      console.log(response);
    })

    this.upo.username=this.data.p1;
    this.upo.password=this.data.p2;
    this.upo.name=this.data.p3;
    this.o=this.data.p4;

    this.send={
      "username":this.upo.username,
      "otp":this.o
    }

    setTimeout(()=>{
      this.jwtService.deleteForOtp(this.send).subscribe((response:any)=>{
        if(response==true){
          console.log("Deletion Successful");
        }
        else{
          console.log("Some problem in deletion occured");
        }
      },(error:any)=>{
        console.log(error);
      })
    },300000);
  }

  // deleteOtp():any{
  //   this.jwtService.deleteForOtp(this.send).subscribe((response:any)=>{
  //     if(response==true){
  //       console.log("Deletion Successful");
  //     }
  //     else{
  //       console.log("Some problem in deletion occured");
  //     }
  //   },(error:any)=>{
  //     console.log(error);

  //   })
  // }

  submitOTP():any{

    this.jwtService.registerotp(this.upo).subscribe((response:any)=>{
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

export class UPO{
  constructor( public username:string, public password:string, public otp:string, public name:string ) { }
}
