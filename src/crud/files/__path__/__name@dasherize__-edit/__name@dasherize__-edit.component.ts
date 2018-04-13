import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { <%= classify(name) %> } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>';
import { <%= classify(name) %>Service } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>.service';
import { AppMessageData } from '@app/ui/dialogs/app-message-dialog/app-message-data';
import { AppMessageDialogComponent } from '@app/ui/dialogs/app-message-dialog/app-message-dialog.component';

@Component({
  selector: 'app-<%= dasherize(name) %>-edit',
  templateUrl: './<%= dasherize(name) %>-edit.component.html',
  styleUrls: ['./<%= dasherize(name) %>-edit.component.css']
})
export class <%= classify(name) %>EditComponent {

  <%= camelize(name) %>: <%= classify(name) %>;

  constructor(private router: Router,
      private route: ActivatedRoute,
      private <%= camelize(name) %>Service: <%= classify(name) %>Service,
      private dialog: MatDialog) {

    this.route.data.subscribe((data: any) => {
      this.<%= camelize(name) %> = data.<%= camelize(name) %>;
    });
  }

  onSubmit(<%= camelize(name) %>): void {
    this.<%= camelize(name) %>Service.update(<%= camelize(name) %>).subscribe(this.onEdit<%= classify(name) %>Success, this.onNew<%= classify(name) %>Error);
  }

  onCancel(): void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  private onEdit<%= classify(name) %>Success = (value: any) => {
    const message = new AppMessageData('Edit <%= classify(name) %>', '<%= classify(name) %> updated successfully', 'done', 'success');
    this.dialog.open(AppMessageDialogComponent, {data: message});
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  private onNew<%= classify(name) %>Error = (error: any) => {
    const message = new AppMessageData('Error <%= classify(name) %>', error.message, 'error_outline', 'error');
    this.dialog.open(AppMessageDialogComponent, {data: message});
  }

}
