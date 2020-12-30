import { BitcoinService } from './../../services/bitcoin.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private UserService: UserService,
    private BitcoinService: BitcoinService
  ) {}
  subscription: Subscription;
  user: User;
  btcRate: any;
  yesterdayRate: number;
  marketPrice = {
    data: '',
    colors: ['#ff9b22', '#ffc175']
  }
  get userUsdBalance() {
    const usdRate = this.user.coins / this.btcRate;
    return usdRate.toLocaleString('en-US', { maximumFractionDigits: 2 });
  }
  async loadBtcRate() {
    this.btcRate = await this.BitcoinService.getRate();
  }
  async loadMarketPriceData() {    
    try {
      const data = await this.BitcoinService.getMarketPrice();
      this.marketPrice.data = data;      
    } catch {
      console.log('cannot pull data for chart');
    }
  }
  ngOnInit(): void {
    this.subscription = this.UserService.user$.subscribe(
      (user) => (this.user = user)
    );
    this.loadBtcRate();
    this.loadMarketPriceData();
    this.loadYesterdayRate();
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
  get btcTousd() {
    const rate = +(1 / this.btcRate).toFixed(2);
    return rate.toLocaleString('en-US', { maximumFractionDigits: 2 });
  }
  get chartSubtitle() {
    return `${this.btcDiffAmount} (${this.btcDiffPrecent}%) today`
  }
  get btcDiffAmount() {
    const res = (1/this.btcRate ) - (this.yesterdayRate)
    return  parseInt(res.toFixed(2))
  }
  get btcDiffPrecent() {
    const res: number  = (this.btcDiffAmount / (1/this.btcRate)) * 100
    return res.toFixed(2)
  }
  async loadYesterdayRate() {
    const yesterdayRate = await this.BitcoinService.getYesterdayRate();
    this.yesterdayRate = yesterdayRate
  }
  // get totalPaymentsUsd(){
  //   const sum = this.props.moves.reduce((acc, move)=>acc += move.amount, 0)
  //   const res = (1/this.state.btcRate)*sum
  //   return res.toLocaleString('en-US', { maximumFractionDigits: 2 });
  // }
}
