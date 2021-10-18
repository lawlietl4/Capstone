//Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Page Imports
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TicketViewerComponent } from './ticketviewer/ticketviewer.component';
import { LoginComponent } from './login/login.component';
import { StudentAdderComponent } from './student-adder/student-adder.component';
import { AuthorizationGuard } from './_guards/authorization.guard';
import { TicketEditorComponent } from './ticket-editor/ticket-editor.component';
import { AssetViewerComponent } from './asset-viewer/asset-viewer.component';
import { AssetEditorComponent } from './asset-editor/asset-editor.component';
import { AssetLookupComponent } from './asset-lookup/asset-lookup.component';
import { LoaningTabComponent } from './loaning-tab/loaning-tab.component';

const routes: Routes = [
  { path: 'ticket-viewer', component: TicketViewerComponent, canActivate: [AuthorizationGuard] },
  { path: 'ticket-editor', component: TicketEditorComponent },
  /*{ path: 'login', component: LoginComponent },*/
  { path: 'student-adder', component: StudentAdderComponent},
  { path: 'asset-viewer', component: AssetViewerComponent},
  { path: 'asset-editor', component: AssetEditorComponent},
  { path: 'asset-lookup', component: AssetLookupComponent},
  { path: 'loaning', component: LoaningTabComponent},
  { path: '', redirectTo: '/ticket-viewer', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
