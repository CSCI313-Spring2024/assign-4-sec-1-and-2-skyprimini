import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../contact.data';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css',
})
  
export class EditContactComponent implements OnInit {
  contactService = inject(ContactService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editingContact: Contact | undefined;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // ✅ GET ID FROM URL
    this.editingContact = this.contactService
      .getContacts()
      .find((c) => c.id === id);
  }

  updateContact(): void {
    if (this.editingContact) {
      this.contactService.updateContact(this.editingContact);
      this.router.navigate(['/']);
    }
  }

  cancelEdit(): void {
    this.router.navigate(['/']);
  }

}
