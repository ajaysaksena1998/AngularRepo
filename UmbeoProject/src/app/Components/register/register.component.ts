import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:Register;
  otp:any;
  m:any="";
  checker:any="";
  bool:boolean=false;
  numbers:any= "0123456789";
  err:boolean= false;
  i:any;
  o:string;
  opt:string="";
  registered:string="Successfully Registered";
  error:string="Some Error Occured!! Please contact ADMIN!!!"
  confirm:any;
  constructor( private _service: JWTAuthenticationService, private router:Router ) { }

  ngOnInit(): void {
    this.register= new Register("","","","");
  
  }

  generateOtp(){


    for(this.i=0; this.i<7; this.i++){
      this.opt+=Math.floor(Math.random()*10)
    }

    return this.opt;
    
  }

  RegisterUser():any{
    this.checker="";
    this.o = this.generateOtp()
    this.register.otp=this.o;
    if(this.register.password==this.confirm){
      console.log(this.register)
      this._service.RegisteringUsers(this.register).subscribe((response:any)=>{
        if(response==true){
          this.bool=true;
          this.err=false;
          this.confirm="";
          this.router.navigate(['/otp'], {
            queryParams: {p1:this.register.username, p2:this.register.password,p3:this.register.name,p4:this.register.otp},
            skipLocationChange: true
          });
        }
        else{
          this.bool=false;
          this.err=true;
        }
      })
    }
    else{
      this.checker= "Passwords do not match";
      this.confirm="";
    }
    
  }
}

export class Register{
  constructor( public name:string, public username:string, public password:string, public otp:string) { }
}
