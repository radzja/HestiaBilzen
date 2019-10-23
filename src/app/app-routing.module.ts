import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KalenderComponent } from './kalender/kalender.component';
import { SporthallenComponent } from './sporthallen/sporthallen.component';
import { DocumentenComponent } from './documenten/documenten.component';
import { TeamsComponent } from './teams/teams.component';
import { PloegComponent } from './ploeg/ploeg.component';
import { ContactFormComponent } from './contactform/contactform.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
       { path: 'home', component: HomeComponent },
       { path: 'kalender', component: KalenderComponent },
       { path: 'sporthallen', component: SporthallenComponent },
       { path: 'documenten', component: DocumentenComponent },
       { path: 'teams', component: TeamsComponent },
       { path: 'ploeg', component: PloegComponent },
       { path: 'contactform', component: ContactFormComponent},
       { path: '', redirectTo:  'home', pathMatch: 'full' },
       { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
