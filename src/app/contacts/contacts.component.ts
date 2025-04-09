import { Component, EventEmitter, Input, Output, inject,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.data';
import { RouterLink } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, RouterLink],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  @Input() contact!: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() delete = new EventEmitter<number>();
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  editContact(): void {
    this.edit.emit(this.contact);
  }

  deleteContact(): void {
    this.delete.emit(this.contact.id);
  }
}
