import { User } from './../../models/user.model';
import { Subscription } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private UserService: UserService,
    private BitcoinService: BitcoinService,
    private router : Router
  ) {}
  subscription: Subscription;
  user: User;
  btcRate: any;
  marketPrice = {
    data: '',
    colors: ['#ff9b22', '#ffc175'],
  };
  async loadMarketPriceData() {
    try {
      const data = await this.BitcoinService.getMarketPrice();
      this.marketPrice.data = data;
    } catch {
      console.log('cannot pull data for chart');
    }
  }
  onGetStarted(){
    this.router.navigateByUrl('dashboard')
  }
  ngOnInit(): void {
    this.loadMarketPriceData();
  }
}
