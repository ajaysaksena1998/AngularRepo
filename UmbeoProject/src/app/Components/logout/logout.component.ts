import { Component, OnInit } from '@angular/core';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private jwtAuth: JWTAuthenticationService) { }

  ngOnInit(): void {
    this.jwtAuth.logout();
  }

}
