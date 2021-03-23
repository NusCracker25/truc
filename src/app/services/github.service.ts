import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  gitHubURL = 'https://api.github.com';
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.gitHubURL}/users?per_pages=10`)
  }

 /* getFile(){
    return this.http.get()
  }*/
}
