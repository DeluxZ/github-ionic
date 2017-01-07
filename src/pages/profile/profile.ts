import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';
import { ProfileData } from '../../providers/profile-data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  userProfile: any;
  birthDate: any;

  constructor(public navCtrl: NavController, public profileData: ProfileData, public authData: AuthData, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

  }

  updateName() {
    let alert = this.alertCtrl.create({
      message: "Your first name & last name",
      inputs: [{
        name: 'firstName',
        placeholder: 'Your first name',
        value: this.userProfile.firstName
      },
      {
        name: 'lastName',
        placeholder: 'Your last name',
        value: this.userProfile.lastName
      }],
      buttons: [{
        text: 'Cancel'
      }, {
        text: 'Save',
        handler: data => {
          this.profileData.updateName(data.firstName, data.lastName);
        }
      }]
    });
    alert.present();
  }

  updateDateOfBirth(birthDate: string) {
    this.profileData.updateDateOfBirth(birthDate);
  }

  updateEmail() {
    let alert = this.alertCtrl.create({
      inputs: [{
        name: 'newEmail',
        placeholder: 'Your new email',
      }],
      buttons: [{
        text: 'Cancel'
      }, {
        text: 'Save',
        handler: data => {
          this.profileData.updateEmail(data.newEmail);
        }
      }]
    });
    alert.present();
  }

  updatePassword() {
    let alert = this.alertCtrl.create({
      inputs: [{
        name: 'newPassword',
        placeholder: 'Your new password',
        type: 'password'
      }],
      buttons: [{
        text: 'Cancel'
      }, {
        text: 'Save',
        handler: data => {
          this.profileData.updatePassword(data.newPassword);
        }
      }]
    });
    alert.present();
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: 'Loading your profile'
    });

    loader.present().then(() => {
      this.profileData.getUserProfile().on('value', (data) => {
        this.userProfile = data.val();
        this.birthDate = this.userProfile.birthDate;
      });
      loader.dismiss();
    });
  }

}
