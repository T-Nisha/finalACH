import { Component } from '@angular/core';
import { ContractorService } from '../../service/contractor.service';
import { Contractor } from '../model/contractor';

@Component({
  selector: 'app-contractor-registration',
  templateUrl: './contractor-registration.component.html',
  styleUrls: ['./contractor-registration.component.css']
})
export class ContractorRegistrationComponent {
  contractorData: Contractor = new Contractor();

  constructor(private contractorService: ContractorService) {}

  onSubmit() {
    this.contractorService.createContractor(this.contractorData).subscribe(
      response => {
        console.log('Contractor registered successfully', response);
      },
      error => {
        console.error('Error registering contractor', error);
      }
    );
  }
}
