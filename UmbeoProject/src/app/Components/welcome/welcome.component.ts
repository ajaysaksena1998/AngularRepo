import { Component, OnInit } from '@angular/core';
import { JWTAuthenticationService } from 'src/app/Services/jwtauthentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'assets/bg00.jpeg'
  };

  data:any;
  user:any;

  constructor( private _service: JWTAuthenticationService) { }

  ngOnInit(): void {

    this.user= this._service.getAuthenticatedUser();

    }
  
}
