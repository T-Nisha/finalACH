import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DetailsService } from '../service/details.service';


@Component({
  selector: 'app-insert-details',
  templateUrl: './insert-details.component.html',
  styleUrls: ['./insert-details.component.css']
})
export class InsertDetailsComponent {
  detailsForm: FormGroup;

  constructor(private fb: FormBuilder, private detailsService: DetailsService) {
    this.detailsForm = this.fb.group({
      image: [null],
      mobileNumber: [''],
      description: [''],
      contractor: [''] // Add contractor field to identify the contractor
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.detailsForm.patchValue({
        image: file
      });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.detailsForm.get('image')!.value);
    formData.append('mobileNumber', this.detailsForm.get('mobileNumber')!.value);
    formData.append('description', this.detailsForm.get('description')!.value);
    formData.append('contractor', this.detailsForm.get('contractor')!.value);

    this.detailsService.saveDetails(formData).subscribe(response => {
      console.log(response);
    });
  }
}
