//Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Personal Imports
import { MainWindowComponent } from './main-window/main-window.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TicketViewerComponent } from './ticketviewer/ticketviewer.component';

const routes: Routes = [
  { path: '', component: MainWindowComponent, children:
    [
      {
        path: 'ticket-viewer', component: TicketViewerComponent
      }
    ] 
  },
  { path: 'index', redirectTo: ''},
  { path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo:'index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
