import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FollowersPage } from '../followers/followers';
import { FollowingPage } from '../following/following';
import { ReposPage } from '../repos/repos';
import { GistPage } from '../gist/gist';

import { User } from '../../models/user';

import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  user: User;
  login: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadDetails(this.login).subscribe(user => {
      this.user = user;
    });
  }

  goToFollowers(login: string) {
    this.navCtrl.push(FollowersPage, { login });
  }

  goToFollowing(login: string) {
    this.navCtrl.push(FollowingPage, { login });
  }

  goToRepos(login: string) {
    this.navCtrl.push(ReposPage, { login });
  }

  goToGists(login: string) {
    this.navCtrl.push(GistPage, { login });
  }

  ionViewDidLoad() {
  }
}