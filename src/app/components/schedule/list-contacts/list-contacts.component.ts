import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../../services/contact.service';

import { Contact } from '../../../interfaces/contact';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  public listContacts: Contact[];

  constructor(private _contactService: ContactService) {
    this.listContacts = [];
   }

  ngOnInit(): void {
    if (this._contactService.listContacts.length > 0) {
       this.listContacts = this._contactService.listContacts;
    } else {
       this._contactService.getData('assets/data/contacts.json')
            .subscribe(list => {
              this.listContacts = list;
            });
    }
  }

}
