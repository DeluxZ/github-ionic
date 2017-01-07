import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class AuthData {
  public fireAuth: firebase.auth.Auth;
  public userProfile: firebase.database.Reference;

  constructor(public http: Http) {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('/userProfile');
  }

  loginUser(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser: firebase.User) => {
        this.userProfile.child(newUser.uid).set({ email: email });
      });
  }

  resetPassword(email: string): firebase.Promise<any> {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  logoutUser(): firebase.Promise<any> {
    return this.fireAuth.signOut();
  }

}
