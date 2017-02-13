import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { MessageListComponent } from './message-list/message-list.component';
import { AlertComponent } from './alert/alert.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { TheadListComponent } from './thead-list/thead-list.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    MessageSectionComponent,
    MessageListComponent,
    AlertComponent,
    ThreadSectionComponent,
    TheadListComponent,
    UserSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
