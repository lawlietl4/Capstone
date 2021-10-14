//Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Personal Imports
import { MainWindowComponent } from './main-window/main-window.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TicketViewerComponent } from './ticketviewer/ticketviewer.component';
import { LoginComponent } from './login/login.component';
import { StudentAdderComponent } from './student-adder/student-adder.component';

const routes: Routes = [
  { path: '', component: MainWindowComponent },
  { path: 'ticket-viewer', component: TicketViewerComponent },
  { path: '404not-found', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student-adder', component: StudentAdderComponent},
  { path: '**', redirectTo: 'ticket-viewer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
