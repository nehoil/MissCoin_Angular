import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './pages/charts/charts.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
// import { AuthGuard } from './guards/auth.guard';
// import { PetResolverService } from './services/pet-resolver.service';


const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'contact/edit', component: ContactEditComponent, canActivate: [AuthGuard]
  },
  {
    path: 'contact/edit/:id', component: ContactEditComponent, canActivate: [AuthGuard]
  },
  {
    path: 'contact/:id', component: ContactDetailsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'charts', component: ChartsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'contact', component: ContactPageComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
