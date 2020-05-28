import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { RouteGuardService } from './Services/Guard/route-guard.service';
import { JoinMeetingComponent } from './Components/join-meeting/join-meeting.component';
import { url } from 'inspector';
import { HostMeetingComponent } from './Components/host-meeting/host-meeting.component';
import { OtpComponent } from './Components/otp/otp.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "login"
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'welcome',
    component: WelcomeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path:'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService]
  },
  {
    path:'joinMeeting',
    component: JoinMeetingComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'hostMeeting',
    component: HostMeetingComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'otp',
    component: OtpComponent,
  },
  {
    path:'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
    canActivate:[RouteGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
