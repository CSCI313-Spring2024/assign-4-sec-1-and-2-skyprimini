import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.data';
import { Router, RouterLink } from '@angular/router';

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


  editContact(): void {
    this.edit.emit(this.contact);
  }

  deleteContact(): void {
    this.delete.emit(this.contact.id);
  }
}
