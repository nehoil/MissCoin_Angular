import { ContactService } from './../../services/contact.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  subscription: Subscription;
  contactSubs: Subscription;
  moveSubs: Subscription;
  contact: any;
  user: User;
  moves: Array<Object>;
  constructor(private UserService: UserService, private ContactService: ContactService, private route: ActivatedRoute, private router: Router) {}
  loadContact(id: string){
    this.contactSubs = this.ContactService.getContactById(id).subscribe(
      (contact) => this.contact = contact);    
  }
  onGoBack(){
    this.router.navigateByUrl('contact')
  }
  async onRemove(){

    await this.ContactService.deleteContact(this.contact._id)
    this.router.navigateByUrl('contact')
  }
  onEdit(){    
    this.router.navigateByUrl(`contact/edit/${this.contact._id}`)
  }
  loadMoves(){        
    const moves = this.user.moves.filter(move => {
      return move.toId === this.contact._id
    })
    this.moves = moves
  }
  ngOnInit(): void {
    this.route.params.subscribe(({id}) => this.loadContact(id))
    this.subscription = this.UserService.user$.subscribe(
      (user) => {
        this.user = user
        this.loadMoves()
      }
      );
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    if (this.contactSubs) this.contactSubs.unsubscribe();
    if (this.moveSubs) this.moveSubs.unsubscribe();
  }

}
