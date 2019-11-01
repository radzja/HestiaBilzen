import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contactform/contactform.component';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';

import { CommonModule } from '@angular/common';
import { KalenderService } from './kalender/kalender.service';
import { SporthalService } from './sporthallen/sporthal.service';
import { SpelerService } from './ploeg/speler.service';
import { RouteInfoComponent } from './route-info/route-info.component';

import { fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from './_helpers';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SporthallenComponent,
    DocumentenComponent,
    TeamsComponent,
    KalenderComponent,
    SponsorsComponent,
    HeaderComponent,
    PloegComponent,
    ThankYouPageComponent,
    RouteInfoComponent,
    LoginComponent,
    AdminComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [KalenderService,             
              SporthalService,
              SpelerService,
            
              { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
              fakeBackendProvider
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
