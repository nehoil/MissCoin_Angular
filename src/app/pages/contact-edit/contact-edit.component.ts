import { ContactService } from './../../services/contact.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  subscription: Subscription
  contact : Contact = {
    _id: '',
    email: '',
    name: 'fdsgds',
    phone: ''
  }
  name = ''
  constructor(private ContactService: ContactService, private route: ActivatedRoute, private router: Router) {}
  async submitForm(){
    await this.ContactService.saveContact(this.contact)
    this.router.navigateByUrl('contact')
  }
  loadContact(id){
    this.subscription = this.ContactService.getContactById(id).subscribe((contact)=> {
      this.contact = contact
    })
  }
  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')) this.route.params.subscribe(({id}) => this.loadContact(id));
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
