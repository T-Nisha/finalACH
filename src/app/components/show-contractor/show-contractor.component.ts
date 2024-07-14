import { Component, OnInit } from '@angular/core';
import { ContractorService } from '../../service/contractor.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Contractor } from '../model/contractor';
import { SmgsuccessComponent } from '../smgsuccess/smgsuccess.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-show-contractor',
  templateUrl: './show-contractor.component.html',
  styleUrl: './show-contractor.component.css'
})
export class ShowContractorComponent implements OnInit {
  constructor(private service: ContractorService, private router: Router, private dialog: MatDialog) {}
  contractorData: Contractor = new Contractor();

  public contractor : Observable<Contractor[]> = of([]);

  ngOnInit() {
    console.log("Inside getAll Method");
    this.getAllContractor();
  }

  getAllContractor() {
    console.log("Inside getAll Method");
    this.contractor = this.service.getAllContractor()
  }

  deleteContractor(id: number) {
    const confirmDialogRef = this.dialog.open(SmgsuccessComponent, {
      width: '300px',
      data: { messageType: 'confirm', message: `${this.contractorData.username} Are you sure you want to delete this  farmer?`}
    });

    confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.deleteContractor(id).subscribe((data) => {
          console.log(data);
          this.getAllContractor();
        });
      }
    });
  }

  findContractor(id: number) {
    this.router.navigate(['search', id]);
  }

  updateContractor(id: number) {
    this.router.navigate(['updatecontractor', id]);
  }
}

