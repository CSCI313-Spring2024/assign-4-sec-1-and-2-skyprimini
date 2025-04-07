import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css',
})
export class AddContactComponent {
  fName = '';
  lName = '';
  number = '';

  constructor(private contactService: ContactService, private router: Router) {}

  addContact(): void {
    if (this.fName && this.lName && this.number) {
      this.contactService.addAccount(this.fName, this.lName, this.number);
      this.router.navigate(['/']);
    }
  }
}
