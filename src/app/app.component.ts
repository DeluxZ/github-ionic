import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';
import { Config } from '../config/dev.config';

import firebase from 'firebase';

import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { UsersPage } from '../pages/users/users';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = UsersPage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public menu: MenuController) {
    this.initializeApp();

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.rootPage = LoginPage;
      }
    });

    // set our app's pages
    this.pages = [
      { title: 'Users', component: UsersPage },
      //{ title: 'Repos', component: ReposPage },
      //{ title: 'Organisations', component: OrganisationsPage },
      { title: 'Profile', component: ProfilePage }
    ];
  }

  initializeApp() {
    firebase.initializeApp(Config.firebaseConfig);

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
