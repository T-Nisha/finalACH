import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DetailsService } from '../../service/details.service';
import { Detail } from '../model/detail';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-contractor-dashboard',
  templateUrl: './contractor-dashboard.component.html',
  styleUrls: ['./contractor-dashboard.component.css']
})
export class ContractorDashboardComponent implements OnInit {
  contractorDetails: Detail[] = [];
  userName: string | null = null;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.adminService.getLoggedInUsername();
    console.log('Logged in username:', this.userName); // Check console for logged username
  }

    getImageUrl(detail: Detail): string {
    // Assuming the backend provides an endpoint like `/agroch/image/{id}`
    return `http://localhost:8081/agroch/image/${detail.id}`;
  }

  logout() {
    // Logout functionality here, if applicable
    localStorage.removeItem('contractorUsername');
    this.router.navigate(['/login']);
  }
}
