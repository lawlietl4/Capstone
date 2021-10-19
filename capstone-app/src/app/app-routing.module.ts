//Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Page Imports
import { PageNotFoundComponent } from './_pages/page-not-found/page-not-found.component';
import { TicketViewerComponent } from './_pages/ticketviewer/ticketviewer.component';
import { LoginComponent } from './_pages/login/login.component';
import { StudentAdderComponent } from './_pages/student-adder/student-adder.component';
import { AuthorizationGuard } from './_guards/authorization.guard';
import { TicketEditorComponent } from './_pages/ticket-editor/ticket-editor.component';
import { AssetViewerComponent } from './_pages/asset-viewer/asset-viewer.component';
import { AssetEditorComponent } from './_pages/asset-editor/asset-editor.component';
import { AssetLookupComponent } from './_pages/asset-lookup/asset-lookup.component';
import { LoaningTabComponent } from './_pages/loaning-tab/loaning-tab.component';
import { TicketInfoComponent } from './_pages/ticket-info/ticket-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/ticket-viewer', pathMatch:'full' },
  { path: 'ticket-viewer', component: TicketViewerComponent, canActivate: [AuthorizationGuard], children: [
      { path: ':id', component: TicketInfoComponent },
    ] 
  },
  { path: 'ticket-editor', component: TicketEditorComponent },
  /*{ path: 'login', component: LoginComponent },*/
  // { path: 'ticket-viewer/:id', component: TicketInfoComponent },
  { path: 'student-adder', component: StudentAdderComponent},
  { path: 'asset-viewer', component: AssetViewerComponent},
  { path: 'asset-editor', component: AssetEditorComponent},
  { path: 'asset-lookup', component: AssetLookupComponent},
  { path: 'loaning', component: LoaningTabComponent},
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
