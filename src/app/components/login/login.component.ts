// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../../service/admin.service';
import { SmgsuccessComponent } from '../smgsuccess/smgsuccess.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = '';

  constructor(
    private adminService: AdminService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const eyeIcon = document.querySelector('.password-container i.fa-eye') as HTMLElement;
    const eyeSlashIcon = document.querySelector('.password-container i.fa-eye-slash') as HTMLElement;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.style.display = 'none';
      eyeSlashIcon.style.display = 'inline-block';
    } else {
      passwordInput.type = 'password';
      eyeIcon.style.display = 'inline-block';
      eyeSlashIcon.style.display = 'none';
    }
  }

  login(): void {
    if (!this.username || !this.password || !this.role) {
      console.error('Username, password, and role are required.');
      alert('Username, password, and role are required.');
      return;
    }

    this.adminService.login(this.username, this.password, this.role).subscribe(
      (authenticated: boolean) => {
        if (authenticated) {
          this.dialog.open(SmgsuccessComponent, {
            width: '300px',
            data: { messageType: 'success', message: `${this.username} You are logged in as: ${this.role}` }
          }).afterClosed().subscribe(() => {
            this.navigateToRoleDashboard();
          });
        } else {
          this.dialog.open(SmgsuccessComponent, {
            width: '300px',
            data: { messageType: 'error', message: `${this.role} is not exist for this username. ${this.username}, please check your credentials!` }
          });
        }
      },
      error => {
        console.error('Login error:', error);
        this.dialog.open(SmgsuccessComponent, {
          width: '300px',
          data: { messageType: 'error', message: 'An error occurred during login.' }
        });
      }
    );
  }

  private navigateToRoleDashboard(): void {
    switch (this.role) {
      case 'Admin':
        this.router.navigate(['/admin-dashboard']);
        break;
      case 'Farmer':
        this.router.navigate(['/farmer-dashboard']);
        break;
      case 'Contractor':
        this.router.navigate(['/contractor-dashboard']);
        break;
      case 'Retailer':
        this.router.navigate(['/retailer-dashboard']);
        break;
      case 'Labour':
        this.router.navigate(['/labour-dashboard']);
        break;
      default:
        break;
    }
  }
}
