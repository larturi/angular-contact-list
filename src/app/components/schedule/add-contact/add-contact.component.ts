import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../../../interfaces/contact';

import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public contact: Contact;

  constructor(private _contactService: ContactService,
              private route: Router) {
    this.contact = {
       name: '',
       surname: '',
       description: '',
       sex: 'mujer',
       email: '',
       telephone: '',
       company: ''
    };
  }

  ngOnInit(): void {
  }

  addContact() {
    this._contactService.addContact(this.contact);
    this.route.navigate(['/list-contact']);
  }

}
