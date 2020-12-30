import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private BitcoinService: BitcoinService
  ) {}
  subscription: Subscription;
  user: User;
  btcRate: any;
  marketPrice = {
    data: '',
    colors: ['#ff9b22', '#ffc175']
  }
  avgBlockSize = {
    data: '',
    colors: ['#4caf50', '#ffc175']
  }
  tradeVolume = {
    data: '',
    colors: ['#2196f3', '#ffc175']
  }
  confirmedTransaction = {
    data: '',
    colors: ['#9c27b0', '#ffc175']
  }
  get userUsdBalance() {
    const usdRate = this.user.coins / this.btcRate;
    return usdRate.toLocaleString('en-US', { maximumFractionDigits: 2 });
  }
  async loadBtcRate() {
    this.btcRate = await this.BitcoinService.getRate();
  }
  async loadAvgBlockSize() {
    try {
      const avgBlockSizeData = await this.BitcoinService.getAvgBlockSize();
      this.avgBlockSize.data = avgBlockSizeData
    } catch {
      console.log('cannot pull avgBlockSizeData for chart');
    }
  }
  async loadTradeVolume() {
    try {
      const tradeVolumeData = await this.BitcoinService.getTradeVolume();
      this.tradeVolume.data = tradeVolumeData
    } catch {
      console.log('cannot pull avgBlockSizeData for chart');
    }
  }
  async loadConfirmedTransactions() {
    try {
      const confirmedTransactionsData = await this.BitcoinService.getConfirmedTransactions();
      this.confirmedTransaction.data = confirmedTransactionsData
    } catch {
      console.log('cannot pull avgBlockSizeData for chart');
    }
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
    this.loadMarketPriceData();
    this.loadAvgBlockSize();
    this.loadTradeVolume();
    this.loadConfirmedTransactions();
    this.loadBtcRate();
  }
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
