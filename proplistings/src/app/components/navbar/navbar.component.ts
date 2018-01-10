import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth,
              public fms: FlashMessagesService) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.fms.show('You are logging...', { cssClass: 'alert-success', timeout: 6000 });
  }
  logout() {
    this.afAuth.auth.signOut();
    this.fms.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
  }

}
