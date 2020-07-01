import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';
import { MessageCreateComponent } from './components/message-create/message-create.component';
import { MessageEditComponent } from './components/message-edit/message-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'message/add', component: MessageCreateComponent },
  { path: 'message/:id', component: MessageDetailComponent },
  { path: 'message/update/:id', component: MessageEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
