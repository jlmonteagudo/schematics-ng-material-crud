import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppMaterialModule } from '@app/app-material.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppMaterialModule
  ],
  declarations: [AdminComponent, DashboardComponent]
})
export class AdminModule { }
