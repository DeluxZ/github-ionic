import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { FollowersPage } from '../pages/followers/followers';
import { FollowingPage } from '../pages/following/following';
import { GistPage } from '../pages/gist/gist';
import { LoginPage } from '../pages/login/login';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { ProfilePage } from '../pages/profile/profile';
import { RepoDetailsPage } from '../pages/repo-details/repo-details';
import { ReposPage } from '../pages/repos/repos';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { UsersPage } from '../pages/users/users';

// Providers
import { AuthData } from '../providers/auth-data';
import { GithubUsers } from '../providers/github-users';
import { ProfileData } from '../providers/profile-data';

@NgModule({
  declarations: [
    MyApp,
    FollowersPage,
    FollowingPage,
    GistPage,
    LoginPage,
    OrganisationsPage,
    ProfilePage,
    RepoDetailsPage,
    ReposPage,
    ResetPasswordPage,
    SignupPage,
    UserDetailsPage,
    UsersPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FollowersPage,
    FollowingPage,
    GistPage,
    LoginPage,
    OrganisationsPage,
    ProfilePage,
    RepoDetailsPage,
    ReposPage,
    ResetPasswordPage,
    SignupPage,
    UserDetailsPage,
    UsersPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthData,
    GithubUsers,
    ProfileData
  ]
})
export class AppModule { }
