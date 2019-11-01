import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
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
import { LoginComponent } from './login/login.component';  
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertComponent } from './_components';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { RegisterComponent } from './register';
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
    LoginComponent,
    RegisterComponent,
    AlertComponent,
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
