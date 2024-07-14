import { Component } from '@angular/core';
import { FarmerService } from '../../service/farmer.service';
import { Farmer } from '../model/farmer';
import { SmgsuccessComponent } from '../smgsuccess/smgsuccess.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrl: './farmer.component.css'
})
export class FarmerComponent {

  constructor(private service:FarmerService, private dialog: MatDialog) { }
  farmerData = new Farmer();

  onSubmit(){
    console.log("Save");
    this.save();
  }
  save(){
     this.service.createFarmer(this.farmerData).subscribe();
     this.dialog.open(SmgsuccessComponent, {
      width: '300px',
      data: { messageType: 'success', message: `Registration Successfull! Usename and password has been sent` }
    })
  }
}
