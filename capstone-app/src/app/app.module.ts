import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TicketViewerComponent } from './ticketviewer/ticketviewer.component';
import { LoginComponent } from './login/login.component';
import { StudentAdderComponent } from './student-adder/student-adder.component';
import { TicketEditorComponent } from './ticket-editor/ticket-editor.component';
import { AssetViewerComponent } from './asset-viewer/asset-viewer.component';
import { AssetEditorComponent } from './asset-editor/asset-editor.component';
import { AssetLookupComponent } from './asset-lookup/asset-lookup.component';
import { LoaningTabComponent } from './loaning-tab/loaning-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    PageNotFoundComponent,
    TicketViewerComponent,
    LoginComponent,
    StudentAdderComponent,
    TicketEditorComponent,
    AssetViewerComponent,
    AssetEditorComponent,
    AssetLookupComponent,
    LoaningTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
