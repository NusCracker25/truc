import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.scss']
})
export class MainnavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

   users;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private github: GithubService) {}


  ngOnInit(){
    this.users = this.github.getUsers();
    /*this.github.getUsers()
      .subscribe(users => {
        //this.users = users;
        console.log(users);
      })*/
  }
}
