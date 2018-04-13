import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-yesno-dialog',
  templateUrl: './app-yesno-dialog.component.html',
  styleUrls: ['./app-yesno-dialog.component.css']
})
export class AppYesNoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AppYesNoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
