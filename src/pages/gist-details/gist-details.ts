import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-gist-details',
  templateUrl: 'gist-details.html'
})
export class GistDetailsPage {
  login: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.login = this.navParams.get('login');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GistDetailsPage');
  }

}
