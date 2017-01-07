import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import firebase from 'firebase';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileData {
  userProfile: firebase.database.Reference;
  currentUser: firebase.User;

  constructor(public http: Http) {
    this.currentUser = firebase.auth().currentUser;
    this.userProfile = firebase.database().ref('/userProfile');
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfile.child(this.currentUser.uid);
  }

  updateName(firstName: string, lastName: string): firebase.Promise<any> {
    return this.userProfile.child(this.currentUser.uid).update({
      firstName: firstName,
      lastName: lastName
    });
  }

  updateDateOfBirth(birthDate: string): firebase.Promise<any> {
    return this.userProfile.child(this.currentUser.uid).update({
      birthDate: birthDate,
    });
  }

  updateEmail(newEmail: string): firebase.Promise<any> {
    return this.currentUser.updateEmail(newEmail).then(() => {
      this.userProfile.child(this.currentUser.uid).update({
        email: newEmail
      });
    }, (error) => {
      console.log(error);
    });
  }

  updatePassword(newPassword: string): firebase.Promise<any> {
    return this.currentUser.updatePassword(newPassword).then(() => {
      console.log("Password changed");
    }, (error) => {
      console.log(error);
    });
  }

}
