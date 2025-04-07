import { Component, inject, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { CommonModule, NgFor } from '@angular/common';
import { Contact } from './contact.data';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ContactsComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'assignment-4';
  contacts: Contact[] = [];
  contactService = inject(ContactService);
  editingContact: Contact | null = null; 

  constructor() {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  editContact(contact: Contact): void {
    this.editingContact = { ...contact };
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id);
    this.contacts = this.contactService.getContacts();
  }

  updateContact(): void {
    if (this.editingContact) {
      this.contactService.updateContact(this.editingContact);
      this.editingContact = null;
      this.contacts = this.contactService.getContacts();
    }
  }

  cancelEdit(): void {
    this.editingContact = null;
  }
  
}

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'add', component: AddContactComponent },
];

