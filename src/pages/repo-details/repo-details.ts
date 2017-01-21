import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo';

import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html'
})
export class RepoDetailsPage {
  login: string;
  repoName: string;
  repo: Repo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    this.repoName = navParams.get('repo');
    this.githubUsers.loadRepoDetails(this.login, this.repoName).subscribe(repo => {
      this.repo = repo;
    });
  }

  ionViewDidLoad() {
  }

}