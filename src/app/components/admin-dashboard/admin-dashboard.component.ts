// admin-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  userName: string | null = null; // Initialize as null or handle potential nulls

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.adminService.getLoggedInUsername();
    console.log('Logged in username:', this.userName); // Check console for logged username
  }

  logout(): void {
    this.adminService.logout();
    this.router.navigate(['/login']); // Example: Redirect to login page after logout
  }
}
