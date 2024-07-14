import { Component, OnInit } from "@angular/core";
import { Contractor } from "../model/contractor";
import { FarmerService } from "../../service/farmer.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { SmgsuccessComponent } from "../smgsuccess/smgsuccess.component";
import { ContractorService } from "../../service/contractor.service";

@Component({
  selector: 'app-update-contractor',
  templateUrl: './update-contractor.component.html',
  styleUrls: ['./update-contractor.component.css']
})
export class UpdateContractorComponent implements OnInit {
  contractorData: Contractor = new Contractor(); // Initialize with a new Farmer object

  constructor(
    private service: ContractorService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Fetch farmer details based on username from route parameter
    const username = this.route.snapshot.params['username'];
    this.service.getContractorByUsername(username).subscribe((data) => {
      this.contractorData = data; // Assign fetched farmer data to farmerData
    });
  }

  onUpdate(): void {
    this.service.updateContractor(this.contractorData).subscribe(
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
      data: { messageType: 'success', message: `'${this.contractorData.username}' is successfully updated.` }
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  openErrorDialog(): void {
    const dialogRef = this.dialog.open(SmgsuccessComponent, {
      width: '300px',
      data: { messageType: 'error', message: `'${this.contractorData.username}' Unable to update, please try again.` }
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
