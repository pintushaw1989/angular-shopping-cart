import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from './../modals/app-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;

  constructor(public auth: AuthService) {
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
