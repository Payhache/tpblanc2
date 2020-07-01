import {HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { HomeComponent } from './components/home/home.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MessagesListComponent,
    HomeComponent,
    MessageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
