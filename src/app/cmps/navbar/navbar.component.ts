import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private UserService : UserService) { }
  user: User;
  userSubs: Subscription
  ngOnInit(): void {
    this.userSubs = this.UserService.user$.subscribe((user)=> this.user = user)
  }
  ngOnDestroy(): void {
    if (this.userSubs) this.userSubs.unsubscribe();
  }
}
