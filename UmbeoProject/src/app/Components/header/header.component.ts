import { Component, OnInit } from '@angular/core';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public jwtAuth: JWTAuthenticationService ) { }

  ngOnInit(): void {
  }
}

export class Doctor{
  constructor( public doctorId:number, public doctorname:string, public doctoremail:string, public designation:string) { }
}
