import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlinePersonsComponent } from './online-persons/online-persons.component';
import { MessageInputComponent } from './message-input/message-input.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlinePersonsComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
