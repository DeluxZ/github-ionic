import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo';

import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  repos: Repo[];
  login: string;
  repoName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadRepos(this.login).subscribe(repos => {
      this.repos = repos;
    });
  }

  goToDetails(user: string, repo: string) {
    console.log(user);
    console.log(repo);
  }

  ionViewDidLoad() {
    console.log('Hello Repos Page');
  }

}
