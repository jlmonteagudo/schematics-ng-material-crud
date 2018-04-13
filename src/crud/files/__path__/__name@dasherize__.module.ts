import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';
import { <%= classify(name) %>ListComponent } from './<%= dasherize(name) %>-list/<%= dasherize(name) %>-list.component';
import { <%= classify(name) %>NewComponent } from './<%= dasherize(name) %>-new/<%= dasherize(name) %>-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { <%= classify(name) %>DetailComponent } from './<%= dasherize(name) %>-detail/<%= dasherize(name) %>-detail.component';
import { <%= classify(name) %>DetailResolver } from './<%= dasherize(name) %>-detail-resolver.service';
import { <%= classify(name) %>EditComponent } from './<%= dasherize(name) %>-edit/<%= dasherize(name) %>-edit.component';
import { <%= classify(name) %>FormComponent } from './<%= dasherize(name) %>-form/<%= dasherize(name) %>-form.component';
import { AppMaterialModule } from '@app/app-material.module';


@NgModule({
  imports: [
    CommonModule,
    <%= classify(name) %>RoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ <%= classify(name) %>ListComponent, <%= classify(name) %>NewComponent, <%= classify(name) %>DetailComponent, <%= classify(name) %>EditComponent, <%= classify(name) %>FormComponent ],
  providers: [ <%= classify(name) %>DetailResolver ]
})
export class <%= classify(name) %>Module { }
