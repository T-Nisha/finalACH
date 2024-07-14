import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { ShowFarmerComponent } from './components/show-farmer/show-farmer.component';
import { UpdateFarmerComponent } from './components/update-farmer/update-farmer.component';
import { FarmerDashboardComponent } from './components/farmer-dashboard/farmer-dashboard.component';
import { ContractorRegistrationComponent } from './components/contractor-registration/contractor-registration.component';
import { UpdateContractorComponent } from './components/update-contractor/update-contractor.component';
import { ContractorDashboardComponent } from './components/contractor-dashboard/contractor-dashboard.component';
import { ShowContractorComponent } from './components/show-contractor/show-contractor.component';
import { InsertDetailsComponent } from './insert-details/insert-details.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'farmer-registration', component: FarmerComponent },
  { path: 'show-farmer', component: ShowFarmerComponent },
  { path: 'show-contractor', component: ShowContractorComponent },
  { path: 'updateFarmer/:username', component: UpdateFarmerComponent },
  { path: 'updateFarmer/:id', component: UpdateFarmerComponent },
  { path: 'farmer-dashboard', component: FarmerDashboardComponent },
  { path: 'contractor-dashboard', component: ContractorDashboardComponent },
  { path: 'updateContractor/:username', component: UpdateContractorComponent },
  { path: 'insert-details', component: InsertDetailsComponent },
  { path: 'show-details', component: ShowDetailsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contractor-registration', component: ContractorRegistrationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
