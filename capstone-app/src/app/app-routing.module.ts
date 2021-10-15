//Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Page Imports
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TicketViewerComponent } from './ticketviewer/ticketviewer.component';
import { LoginComponent } from './login/login.component';
import { StudentAdderComponent } from './student-adder/student-adder.component';
import { AuthorizationGuard } from './_guards/authorization.guard';

const routes: Routes = [
  { path: 'ticket-viewer', component: TicketViewerComponent, canActivate: [AuthorizationGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'student-adder', component: StudentAdderComponent},
  { path: '', redirectTo: '/ticket-viewer', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
