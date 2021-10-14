import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TicketViewerComponent } from './ticketviewer/ticketviewer.component';
import { LoginComponent } from './login/login.component';
import { StudentAdderComponent } from './student-adder/student-adder.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    PageNotFoundComponent,
    TicketViewerComponent,
    LoginComponent,
    StudentAdderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
