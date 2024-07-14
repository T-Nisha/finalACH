import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-smgsuccess',
  templateUrl: './smgsuccess.component.html',
  styleUrls: ['./smgsuccess.component.css']
})
export class SmgsuccessComponent {
  constructor(
    public dialogRef: MatDialogRef<SmgsuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { messageType: 'success' | 'error' | 'confirm', message: string }
  ) {}

  closeDialog(result?: boolean): void {
    this.dialogRef.close(result);
  }
}
