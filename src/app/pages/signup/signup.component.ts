import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }
  user = {
    name: '',
    email: ''
  }
  onSignup(){
    this.UserService.signup(this.user.name)
    this.router.navigateByUrl('dashboard')
  }
  ngOnInit(): void {
  }

}
