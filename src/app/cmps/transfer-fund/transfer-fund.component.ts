import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  constructor(private UserService: UserService) { }
  @Input() contact: Contact;
  @Input() maxCoins: number
  formError = ''
  coins = 0
  onChange(){
    if (this.coins <= 0) return this.formError =  'Cannot send 0 BTC'
    if (this.coins > this.maxCoins) return this.formError =  'Not enough BTC to send'  
    this.formError = ''
  }
  onTransfer(){
    if (this.coins <= 0) return this.formError =  'Cannot send 0 BTC'
    if (this.coins <= 0 || this.coins > this.maxCoins) return
    this.UserService.addMove(this.contact, this.coins)
  }
  ngOnInit(): void {    
  }

}
