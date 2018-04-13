import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppYesNoDialogComponent } from './dialogs/app-yesno-dialog/app-yesno-dialog.component';
import { AppMessageDialogComponent } from './dialogs/app-message-dialog/app-message-dialog.component';
import { AppMaterialModule } from '@app/app-material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [ AppMessageDialogComponent, AppYesNoDialogComponent ],
  entryComponents: [ AppMessageDialogComponent, AppYesNoDialogComponent ]
})
export class UiModule { }
