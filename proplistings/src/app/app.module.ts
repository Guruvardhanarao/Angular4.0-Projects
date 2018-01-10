import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddlistingComponent } from './components/addlisting/addlisting.component';
import { EditlistingComponent } from './components/editlisting/editlisting.component';

import { FirebaseService } from './services/firebase.service';


const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listings', component:ListingsComponent},
  {path:'listing/:id', component:ListingComponent},
  {path:'add-listing', component:AddlistingComponent}
  
];


export const firebaseConfig = {
  apiKey: "AIzaSyDqK89kVQWpOGYb3jY40X47CPQHmXmsiWk",
  authDomain: "proplistings-e1776.firebaseapp.com",
  databaseURL: "https://proplistings-e1776.firebaseio.com",
  projectId: "proplistings-e1776",
  storageBucket: "proplistings-e1776.appspot.com",
  messagingSenderId: "885663765007"
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddlistingComponent,
    EditlistingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
