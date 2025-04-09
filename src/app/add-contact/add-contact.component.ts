import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule],
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
      this.fName = '';
      this.lName = '';
      this.number = '';
      this.router.navigate(['/']);
    }
  }
}
