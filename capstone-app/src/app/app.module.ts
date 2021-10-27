import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MainWindowComponent } from './_pages/main-window/main-window.component';
import { PageNotFoundComponent } from './_pages/page-not-found/page-not-found.component';
import { TicketViewerComponent } from './_pages/ticketviewer/ticketviewer.component';
import { LoginComponent } from './_pages/login/login.component';
import { StudentAdderComponent } from './_pages/student-adder/student-adder.component';
import { TicketEditorComponent } from './_pages/ticket-editor/ticket-editor.component';
import { AssetViewerComponent } from './_pages/asset-viewer/asset-viewer.component';
import { AssetEditorComponent } from './_pages/asset-editor/asset-editor.component';
import { AssetLookupComponent } from './_pages/asset-lookup/asset-lookup.component';
import { LoaningTabComponent } from './_pages/loaning-tab/loaning-tab.component';
import { TicketInfoComponent } from './_pages/ticket-info/ticket-info.component';

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
    LoaningTabComponent,
    TicketInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
