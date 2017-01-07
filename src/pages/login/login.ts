import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, AlertController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthData } from '../../providers/auth-data';

import { SignupPage } from '../signup/signup';
import { UsersPage } from '../users/users';
import { ResetPasswordPage } from '../reset-password/reset-password';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: Loading;

  constructor(public navCtrl: NavController, public authData: AuthData, public formBuilder: FormBuilder, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navParams: NavParams) {
    /**
     * Creates a ControlGroup that declares the fields available, their values and the validators that they are going
     * to be using.
     *
     * I set the password's min length to 6 characters because that's Firebase's default, feel free to change that.
     */
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  /**
     * If the form is valid it will call the AuthData service to log the user in displaying a loading component while
     * the user waits.
     *
     * If the form is invalid it will just log the form value, feel free to handle that as you like.
     */
  loginUser() {
    this.submitAttempt = true;

    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(authData => {
        this.navCtrl.setRoot(UsersPage);
      }, error => {
        this.loading.dismiss().then(() => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

      // TODO: Fix this bug when fixed in ionic <-- https://github.com/driftyco/ionic/issues/9589#issuecomment-268561129  
      //this.loading = this.loadingCtrl.create({
      //dismissOnPageChange: true,
      //});
      //this.loading.present();
    }
  }

  /**
   * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
   */
  elementChanged(input) {
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }

  goToResetPassword() {
    this.navCtrl.push(ResetPasswordPage);
  }

  ionViewDidLoad() {
  }

}
