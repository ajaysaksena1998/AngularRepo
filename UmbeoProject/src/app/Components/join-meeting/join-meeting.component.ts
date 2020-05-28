import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';

@Component({
  selector: 'app-join-meeting',
  templateUrl: './join-meeting.component.html',
  styleUrls: ['./join-meeting.component.css']
})
export class JoinMeetingComponent implements OnInit {

  username:any;
  room:any;
  error:any=false;


  constructor( private router : Router, private cookie:CookieService, private _service:JWTAuthenticationService) { }

  ngOnInit(): void {

    this.error=false;

    this._service.getByUsername().subscribe((response:any)=>{
      console.log(response)
      this.username=response.name;
    },(error:any)=>{
      console.log(error);
    })
  }


  joinMeeting():any{

    this._service.joinRoom(this.room, this.username).subscribe((response:any)=>{
      if(response==true){
        window.location.href = 'http://localhost:3000/?'+'room='+this.room;
        this.error=false;
      }
      else{
        this.error=true;
      }
     
    })    
  }

}
