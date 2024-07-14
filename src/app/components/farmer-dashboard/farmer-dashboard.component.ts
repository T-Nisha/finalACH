import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-dashboard',
  templateUrl: './farmer-dashboard.component.html',
  styleUrls: ['./farmer-dashboard.component.css']
})
export class FarmerDashboardComponent implements OnInit {
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
