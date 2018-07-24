import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authservice: AuthService,private rout:Router) { }
  authentif:boolean;
  ngOnInit() {
    this.authentif = this.authservice.isAuth;
  }

  onSignIn(){
    this.authservice.signIn().then(
      ()=>{
        //console.log("Vous avez reussi à vous connecter!");
        this.authentif =  this.authservice.isAuth;
        this.rout.navigate(['appareil'])
      }
    );

  }

  onSignOut(){
   // console.log("Vous avez reussi à vous deconnecter!");
    this.authservice.signOut();
    this.authentif =  this.authservice.isAuth;
  }

}
