import { Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactService } from './contact.service';

export const routes: Routes = [
  { path: '', component: ContactService },
  { path: 'add', component: AddContactComponent },
];
