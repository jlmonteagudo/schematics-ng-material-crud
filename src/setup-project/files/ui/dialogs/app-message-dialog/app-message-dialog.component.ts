import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './app-message-dialog.component.html',
  styleUrls: ['./app-message-dialog.component.css']
})
export class AppMessageDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AppMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
