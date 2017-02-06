import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.css'],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  ngOnInit(){
    console.log("Here");
  }

  constructor(private auth: AuthService) { }

  isIn() {
    return this.auth.isAuthenticated();
  }

  onLogout(){
    this.auth.logout();
  }

}
