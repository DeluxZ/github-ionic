import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Gist } from '../../models/gist';
import { GistDetailsPage } from '../../pages/gist-details/gist-details';

import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-gist',
  templateUrl: 'gist.html'
})
export class GistPage {
  login: string;
  page: number = 1;
  gists: Gist[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = this.navParams.get('login');
    githubUsers.loadGists(this.login).subscribe(gists => {
      this.gists = gists;
      this.page++;

      for (var gist of gists) {
        gist.fileCount = Object.keys(gist.files).length;
      }
    });
  }

  goToDetails(id: string) {
    this.navCtrl.push(GistDetailsPage, { id });
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.githubUsers.loadGists(this.login, this.page).subscribe(gists => {
        if (gists.length > 0) {
          for (let gist of gists) {
            this.gists.push(gist);
          }
        }

        if (gists.length == 30) {
          this.page++;
        } else {
          infiniteScroll.enable(false);
        }
      });

      infiniteScroll.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GistPage');
  }

}
