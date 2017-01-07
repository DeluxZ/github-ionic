import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { ProfilePage } from '../pages/profile/profile';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { UserDetailsPage } from '../pages/user-details/user-details';

import { AuthData } from '../providers/auth-data';
import { ProfileData } from '../providers/profile-data';
import { GithubUsers } from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    LoginPage,
    ResetPasswordPage,
    ProfilePage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    LoginPage,
    ResetPasswordPage,
    ProfilePage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthData,
    ProfileData,
    GithubUsers
  ]
})
export class AppModule { }
