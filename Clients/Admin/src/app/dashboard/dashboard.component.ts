import { Component, Injector, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SecondPageIndexBase, UserService } from 'vnpost-shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends SecondPageIndexBase implements OnInit {
  post: any;

  constructor(private _user: UserService, protected _injector: Injector) {
    super(_user, _injector);
  }

  ngOnInit() {
    console.log(this._user);
    console.log(this.currentUser);
  }
}
