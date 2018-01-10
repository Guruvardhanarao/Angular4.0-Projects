import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/primeng';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';


import { UserService } from './services/user.service';



export const firebaseConfig = {
  apiKey: "AIzaSyA4Rf2BTpB2gNJk157gdJ6tpeN60hR4xhM",
  authDomain: "coderythm-d099a.firebaseapp.com",
  databaseURL: "https://coderythm-d099a.firebaseio.com",
  projectId: "coderythm-d099a",
  storageBucket: "coderythm-d099a.appspot.com",
  messagingSenderId: "453840702432"

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
