import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Farmer } from '../model/farmer';
import { FarmerService } from '../../service/farmer.service';
import { SmgsuccessComponent } from '../smgsuccess/smgsuccess.component';

@Component({
  selector: 'app-update-farmer',
  templateUrl: './update-farmer.component.html',
  styleUrls: ['./update-farmer.component.css']
})
export class UpdateFarmerComponent implements OnInit {
  farmerData: Farmer = new Farmer(); // Initialize with a new Farmer object

  constructor(
    private service: FarmerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Fetch farmer details based on username from route parameter
    const username = this.route.snapshot.params['username'];
    this.service.searchFarmerByUsername(username).subscribe((data) => {
      this.farmerData = data; // Assign fetched farmer data to farmerData
    });
  }

  onUpdate(): void {
    this.service.updateFarmer(this.farmerData).subscribe(
      (updatedFarmer) => {
        console.log('Updated Farmer:', updatedFarmer);
        this.openSuccessDialog();
      },
      (error) => {
        console.error('Error updating farmer:', error);
        this.openErrorDialog();
      }
    );
  }

  openSuccessDialog(): void {
    const dialogRef = this.dialog.open(SmgsuccessComponent, {
      width: '300px',
      data: { messageType: 'success', message: `'${this.farmerData.userName}' is successfully updated.` }
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  openErrorDialog(): void {
    const dialogRef = this.dialog.open(SmgsuccessComponent, {
      width: '300px',
      data: { messageType: 'error', message: `'${this.farmerData.userName}' Unable to update, please try again.` }
    });
  }


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
}
