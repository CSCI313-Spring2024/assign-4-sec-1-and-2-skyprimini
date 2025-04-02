import { Component, Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  fName = '';
  lName = '';
  phoneNumber = '';
  email = '';

  constructor(private contactService: ContactService) {}

  addContact() {
    if (this.fName && this.lName && this.phoneNumber) {
      this.contactService.addContact({
        id: Date.now(),
        fName: this.fName,
        lName: this.lName,
        phoneNumber: this.phoneNumber,
        email: this.email,
      });

      this.fName = '';
      this.lName = '';
      this.phoneNumber = '';
      this.email = '';
    }
  }
}
