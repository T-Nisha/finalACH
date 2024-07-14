import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Farmer } from '../model/farmer';
import { FarmerService } from '../../service/farmer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SmgsuccessComponent } from '../smgsuccess/smgsuccess.component';

@Component({
  selector: 'app-show-farmer',
  templateUrl: './show-farmer.component.html',
  styleUrls: ['./show-farmer.component.css']
})
export class ShowFarmerComponent implements OnInit {
  constructor(private service: FarmerService, private router: Router, private dialog: MatDialog) {}
  farmerData: Farmer = new Farmer();

  public farmer: Observable<Farmer[]> = of([]);

  ngOnInit() {
    console.log("Inside getAll Method");
    this.getAllFarmer();
  }

  getAllFarmer() {
    console.log("Inside getAll Method");
    this.farmer = this.service.getAllFarmers();
  }

  deleteFarmer(id: number) {
    const confirmDialogRef = this.dialog.open(SmgsuccessComponent, {
      width: '300px',
      data: { messageType: 'confirm', message: `${this.farmerData.userName} Are you sure you want to delete this  farmer?`}
    });

    confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.deleteFarmer(id).subscribe((data) => {
          console.log(data);
          this.getAllFarmer();
        });
      }
    });
  }

  findFarmer(id: number) {
    this.router.navigate(['search', id]);
  }

  updateFarmer(id: number) {
    this.router.navigate(['updateFarmer', id]);
  }
}
