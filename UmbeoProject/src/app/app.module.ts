import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './Components/logout/logout.component';
import { HttpInterceptorJwtService } from './Services/Interceptors/http-interceptor-jwt.service';

import { ModalModule } from './_modal';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JoinMeetingComponent } from './Components/join-meeting/join-meeting.component';

import { CookieService } from 'ngx-cookie-service';
import { HostMeetingComponent } from './Components/host-meeting/host-meeting.component';
import { OtpComponent } from './Components/otp/otp.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component'



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    LogoutComponent,
    JoinMeetingComponent,
    HostMeetingComponent,
    OtpComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorJwtService, multi: true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
