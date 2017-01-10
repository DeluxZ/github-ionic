import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { Repo } from '../models/repo';

@Injectable()
export class GithubUsers {

  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {
  }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map(res => <User[]>res.json());
  }

  // Get github user by providing login(username)
  loadDetails(login: string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/users/${login}`)
      .map(res => <User>res.json());
  }

  // Get the repositories by providing login
  loadRepos(login: string): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/users/${login}/repos`)
      .map(res => <Repo[]>res.json());
  }

  loadRepoDetails(login: string, repo: string): Observable<Repo> {
    return this.http.get(`${this.githubApiUrl}/repos/${login}/${repo}`)
      .map(res => <Repo>res.json());
  }

  // Search for github users
  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
      .map(res => <User[]>res.json().items);
  }

}