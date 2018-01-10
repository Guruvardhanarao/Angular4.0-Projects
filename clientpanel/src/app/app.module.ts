import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuth } from '@firebase/auth-types';
import { FirebaseDatabase } from '@firebase/database-types';
import { FirebaseApp } from '@firebase/app-types';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AdClientComponent } from './components/ad-client/ad-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


import { ClientService } from './services/client.service';



const appRoutes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
];


export const firebaseConfig = {
    apiKey: "AIzaSyAWqyjSKqNTC6rNlLzKf9KLvlBLoUvUiTg",
    authDomain: "client-panel-538d0.firebaseapp.com",
    databaseURL: "https://client-panel-538d0.firebaseio.com",
    storageBucket: "client-panel-538d0.appspot.com",
    messagingSenderId: "1034596392384"
}




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AdClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireDatabase,
    AngularFireAuth,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
