import { Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AppComponent } from './app.component'; 

export const routes: Routes = [

  { path: 'add', component: AddContactComponent },
  { path: 'edit/:id', component: EditContactComponent }, 
];
