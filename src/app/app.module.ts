import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartCmp } from './cmps/chart/chart.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { HeaderComponent } from './cmps/header/header.component';
import { InputComponent } from './cmps/input/input.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { NavbarComponent } from './cmps/navbar/navbar.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { UserMsgComponent } from './cmps/user-msg/user-msg.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MisscoinAppComponent } from './pages/misscoin-app/misscoin-app.component';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from "@angular/common/http";
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];

@NgModule({
  declarations: [
    AppComponent,
    ChartCmp,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    HeaderComponent,
    InputComponent,
    MoveListComponent,
    NavbarComponent,
    TransferFundComponent,
    UserMsgComponent,
    ChartsComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactPageComponent,
    SignupComponent,
    DashboardComponent,
    HomepageComponent,
    MisscoinAppComponent
  ],
  imports: [
    BrowserModule,
    AvatarModule,
    HttpClientModule,
    NgApexchartsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
