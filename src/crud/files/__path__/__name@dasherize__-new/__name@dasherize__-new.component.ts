import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { <%= classify(name) %>Service } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>.service';
import { <%= classify(name) %> } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>';
import { AppMessageData } from '@app/ui/dialogs/app-message-dialog/app-message-data';
import { AppMessageDialogComponent } from '@app/ui/dialogs/app-message-dialog/app-message-dialog.component';

@Component({
  selector: 'app-<%= dasherize(name) %>-new',
  templateUrl: './<%= dasherize(name) %>-new.component.html',
  styleUrls: ['./<%= dasherize(name) %>-new.component.css']
})
export class <%= classify(name) %>NewComponent {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private <%= camelize(name) %>Service: <%= classify(name) %>Service,
    private dialog: MatDialog) { }

  onSubmit(<%= camelize(name) %>: <%= classify(name) %>): void {
    this.<%= camelize(name) %>Service.insert(<%= camelize(name) %>).subscribe(this.onNew<%= classify(name) %>Success, this.onNew<%= classify(name) %>Error);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private onNew<%= classify(name) %>Success = (value: any) => {
    const message = new AppMessageData('New <%= classify(name) %>', '<%= classify(name) %> created successfully', 'done', 'success');
    this.dialog.open(AppMessageDialogComponent, {data: message});
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private onNew<%= classify(name) %>Error = (error: any) => {
    const message = new AppMessageData('Error <%= classify(name) %>', error.message, 'error_outline', 'error');
    this.dialog.open(AppMessageDialogComponent, {data: message});
  }

}
