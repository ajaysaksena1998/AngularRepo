import { Component, OnInit } from '@angular/core';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';

@Component({
  selector: 'app-host-meeting',
  templateUrl: './host-meeting.component.html',
  styleUrls: ['./host-meeting.component.css']
})
export class HostMeetingComponent implements OnInit {

  username:any;
  room:any;
  error:any=false;
  x:string="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  index:any;
  c:any;


  constructor( private _service: JWTAuthenticationService) { }

  ngOnInit(): void {

    this.room=""

    this._service.getByUsername().subscribe((response:any)=>{
      console.log(response)
      this.username=response.name;
    },(error:any)=>{
      console.log(error);
    })


  }

  generatePassword():any{

    for(this.index=1; this.index<=7; this.index++){
      this.c = Math.floor((Math.random()*(this.x.length))+0);
      this.room+=this.x.charAt(this.c);
    }
  }

  hostMeeting():any{

    this.generatePassword();

    this._service.addRoom(this.room, this.username).subscribe((response:any)=>{
      if(response==true){
        window.location.href = 'http://localhost:3000'+'?room='+this.room;
        this.error=false;
      }
      else{
        this.error=true;
      }
    })

  }

}
