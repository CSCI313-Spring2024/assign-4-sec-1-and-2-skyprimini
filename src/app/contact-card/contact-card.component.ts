import { Component, Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';


@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css',
})
export class ContactCardComponent {
  @Input() contact!: {
    id: number;
    fName: string;
    lName: string;
    phoneNumber: string;
    email?: string;
  };

  constructor(private contactService: ContactService) {}

  deleteContact() {
    this.contactService.deleteContact(this.contact.id);
  }

  updateContact(){
    this.contactService.updateContact(this.contact);
   // this.contactService.updateContact(['/edit', this.contact.id]);
  
  }

}
