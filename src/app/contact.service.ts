import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  private contacts = signal<
    {
      id: number;
      fName: string;
      lName: string;
      phoneNumber: string;
      email?: string;
    }[]
  >([
    {
      id: 1,
      fName: 'John',
      lName: 'Adams',
      phoneNumber: '701-000-1000',
      email: 'john@example.com',
    },
    {
      id: 2,
      fName: 'Mary',
      lName: 'Jane',
      phoneNumber: '701-000-2000',
      email: 'mary@example.com',
    },
  ]);

  getContacts() {
    return this.contacts;
  }

  addContact(contact: {
    id: number;
    fName: string;
    lName: string;
    phoneNumber: string;
    email?: string;
  }) {
    this.contacts.update((list) => [...list, { ...contact, id: Date.now() }]);
  }

  updateContact(updatedContact: {
    id: number;
    fName: string;
    lName: string;
    phoneNumber: string;
    email?: string;
  }) {
  
    this.contacts.update((list) =>
      list.map((contact) =>
        contact.id === updatedContact.id
          ? { ...contact, ...updatedContact }
          : contact
      )
    );
  }

  deleteContact(id: number) {
    this.contacts.update((list) => list.filter((contact) => contact.id !== id));
  }
}
