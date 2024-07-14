// admin.service.ts

import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private authService: AuthService) {}

  login(username: string, password: string, role: string) {
    const credentials = { username, password, role };
    if (role === 'Admin') {
      return this.authService.loginAdmin(credentials);
    } else if (role === 'Farmer') {
      return this.authService.loginFarmer(credentials);
    } else if (role === 'Contractor') {
      return this.authService.loginContractor(credentials);
    } else if (role === 'Retailer') {
      return this.authService.loginRetailer(credentials);
    } else if (role === 'Labour') {
      return this.authService.loginLabour(credentials);
    }
    throw new Error('Invalid role');
  }

  getLoggedInUsername(): string | null {
    return this.authService.getLoggedInUsername();
  }

  logout(): void {
    this.authService.logout();
  }
}
