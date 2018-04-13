import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { <%= classify(name) %>ListComponent } from './<%= dasherize(name) %>-list/<%= dasherize(name) %>-list.component';
import { <%= classify(name) %>NewComponent } from './<%= dasherize(name) %>-new/<%= dasherize(name) %>-new.component';
import { <%= classify(name) %>DetailComponent } from './<%= dasherize(name) %>-detail/<%= dasherize(name) %>-detail.component';
import { <%= classify(name) %>DetailResolver } from './<%= dasherize(name) %>-detail-resolver.service';
import { <%= classify(name) %>EditComponent } from './<%= dasherize(name) %>-edit/<%= dasherize(name) %>-edit.component';

const routes: Routes = [
  { path: '', component: <%= classify(name) %>ListComponent },
  { path: 'new', component: <%= classify(name) %>NewComponent },
  { path: 'edit/:id', component: <%= classify(name) %>EditComponent, resolve: { <%= camelize(name) %>: <%= classify(name) %>DetailResolver } },
  { path: ':id', component: <%= classify(name) %>DetailComponent, resolve: { <%= camelize(name) %>: <%= classify(name) %>DetailResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule { }
