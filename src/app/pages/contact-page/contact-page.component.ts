import { Subscription } from 'rxjs';
import { Contact } from './../../models/contact.model';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  subscription: Subscription;
  contacts: Contact[];
  constructor(private ContactService: ContactService) {}
  
  loadContacts(){
    this.subscription = this.ContactService.contacts$.subscribe(
      (contacts) => {
        this.contacts = [...contacts]        
      }
    );
  }
  onFilter(filter){
    this.ContactService.query(filter)
  }
  ngOnInit(): void {
    this.loadContacts()
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
