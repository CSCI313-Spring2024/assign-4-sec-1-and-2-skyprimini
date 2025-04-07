import { Injectable } from '@angular/core';
import { Contact } from './contact.data';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    {
      id: 1,
      fName: 'John',
      lName: 'Adams',
      number: '701-000-1000',
    },

    {
      id: 2,
      fName: 'Mary',
      lName: 'Jane',
      number: '701-100-1010',
    },
  ];

  constructor() { }
  
  // getContactByID(id: number): Contact {
  //   return this.contacts.filter(post => post.id == id)[0];
  // }

  getContacts(): Contact[] {
    return this.contacts;
  }

  // addContact(contact: {
  //   id: number;
  //   fName: string;
  //   lName: string;
  //   phoneNumber: string;

  // }) {
  //   //this.contacts.update((list) => [...list, { ...contact, id: Date.now() }]);
  //   this.contacts.push(this.addContact);
  // }

  addAccount(fName: string, lName: string, number: string) {
    const maxId = this.contacts.reduce(
      (max, contact) => Math.max(max, contact.id),
      0
    );
    const newContact: Contact = {
      //id: this.contacts.length + 1,
      id: maxId + 1,
      fName,
      lName,
      number,
    };
    this.contacts.push(newContact);
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }

  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(
      (contact) => contact.id === updatedContact.id
    );
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }
}
