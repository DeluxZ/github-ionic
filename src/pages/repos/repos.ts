import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RepoDetailsPage } from '../../pages/repo-details/repo-details';
import { Repo } from '../../models/repo';

import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  repos: Repo[];
  login: string;
  page: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadRepos(this.login, this.page).subscribe(repos => {
      this.repos = repos;
      this.page++;
    });
  }

  goToDetails(login: string, repo: string) {
    this.navCtrl.push(RepoDetailsPage, { login, repo });
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.githubUsers.loadRepos(this.login, this.page).subscribe(repos => {
        if (repos.length > 0) {
          for (let repo of repos) {
            this.repos.push(repo);
          }
        }

        if (repos.length == 30) {
          this.page++;
        } else {
          infiniteScroll.enable(false);
        }
      });

      infiniteScroll.complete();
    }, 1000);
  }

  ionViewDidLoad() {
  }

}