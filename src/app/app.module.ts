import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contactform/contactform.component';
<<<<<<< HEAD
=======

>>>>>>> aed3abef6e6356c23f9b53fd42d31c6a303046ab
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SporthallenComponent } from './sporthallen/sporthallen.component';
import { DocumentenComponent } from './documenten/documenten.component';
import { TeamsComponent } from './teams/teams.component';
import { KalenderComponent } from './kalender/kalender.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { HeaderComponent } from './header/header.component';
import { PloegComponent } from './ploeg/ploeg.component';
import { HttpClientModule } from '@angular/common/http';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';

import { CommonModule } from '@angular/common';  


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ContactFormComponent, 
=======
    ContactFormComponent,
    
>>>>>>> aed3abef6e6356c23f9b53fd42d31c6a303046ab
    PageNotFoundComponent,  
    HomeComponent, NavbarComponent, FooterComponent, SporthallenComponent, DocumentenComponent, TeamsComponent, KalenderComponent, SponsorsComponent, HeaderComponent, PloegComponent, ThankYouPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
