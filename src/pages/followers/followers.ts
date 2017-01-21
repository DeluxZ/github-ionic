import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { UserDetailsPage } from '../../pages/user-details/user-details';

import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-followers',
  templateUrl: 'followers.html'
})
export class FollowersPage {
  login: string;
  users: User[];
  page: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = this.navParams.get('login');
    githubUsers.loadFollowers(this.login).subscribe(users => {
      this.users = users;
      this.page++;
    });
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, { login });
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.githubUsers.loadFollowers(this.login, this.page).subscribe(users => {
        if (users.length > 0) {
          for (let user of users) {
            this.users.push(user);
          }
        }

        if (users.length == 30) {
          this.page++;
        } else {
          infiniteScroll.enable(false);
        }
      });

      infiniteScroll.complete();
    }, 2000);
  }

  ionViewDidLoad() {
  }

}
