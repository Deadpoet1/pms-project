import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  //hold login logout string.
  login:string="Login";
  constructor(private router: Router) { }

  ngOnInit(): void {
    // if token is present then change login to logout
    if(sessionStorage.getItem("token")){
      this.login="Logout";
    }
  }
  doLogin(){
    if(sessionStorage.getItem("token")){
      sessionStorage.removeItem("token");
      window.location.href="/";
      // this.router.navigate([""]);
    }
    else{
      window.location.href="/login";
      // this.router.navigate(["login"]);
    }
  }

}
