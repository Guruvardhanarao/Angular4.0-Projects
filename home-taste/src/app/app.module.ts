import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { ReactiveFormsModule }  from '@angular/forms';
import { DishService } from './services/dish.service';
import { PromotionsService } from './services/promotions.service';
import { LeaderService } from './services/leader.service';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { baseURL } from './shared/baseurl';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    DishDetailsComponent,
    FooterComponent,
    AboutComponent,
    LoginComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, 
    FlexLayoutModule, AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  entryComponents: [LoginComponent],
  providers: [DishService, PromotionsService, LeaderService,
              {provide: 'BaseURL', useValue: baseURL },
            ProcessHttpmsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
