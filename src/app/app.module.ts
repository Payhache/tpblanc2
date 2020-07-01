import {HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { HomeComponent } from './components/home/home.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';
import { MessageCreateComponent } from './components/message-create/message-create.component';
import { MessageEditComponent } from './components/message-edit/message-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MessagesListComponent,
    HomeComponent,
    MessageDetailComponent,
    MessageCreateComponent,
    MessageEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
