import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

// Importing Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { SmgsuccessComponent } from './components/smgsuccess/smgsuccess.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { ShowFarmerComponent } from './components/show-farmer/show-farmer.component';
import { UpdateFarmerComponent } from './components/update-farmer/update-farmer.component';
import { FarmerDashboardComponent } from './components/farmer-dashboard/farmer-dashboard.component';
import { ContractorRegistrationComponent } from './components/contractor-registration/contractor-registration.component';
import { UpdateContractorComponent } from './components/update-contractor/update-contractor.component';
import { ShowContractorComponent } from './components/show-contractor/show-contractor.component';
import { InsertDetailsComponent } from './insert-details/insert-details.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ContractorDashboardComponent } from './components/contractor-dashboard/contractor-dashboard.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const appRoutes: Routes = [
  // Add your routes here
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DevelopersComponent,
    SmgsuccessComponent,
    AdminDashboardComponent,
    FarmerComponent,
    ShowFarmerComponent,
    UpdateFarmerComponent,
    FarmerDashboardComponent,
    UpdateContractorComponent,
    ContractorRegistrationComponent,
    ShowContractorComponent,
    InsertDetailsComponent,
    ContractorDashboardComponent,
    ShowDetailsComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
