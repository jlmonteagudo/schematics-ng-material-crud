import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { <%= classify(name) %>ListDataSource } from './<%= dasherize(name) %>-list.datasource';
import { Observable } from 'rxjs/Observable';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Sort } from '@app/services/common';
import { <%= classify(name) %>Service } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>.service';
import { <%= classify(name) %> } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>';
import { AppMessageData } from '@app/ui/dialogs/app-message-dialog/app-message-data';
import { AppMessageDialogComponent } from '@app/ui/dialogs/app-message-dialog/app-message-dialog.component';
import { AppYesNoData } from '@app/ui/dialogs/app-yesno-dialog/app-yesno-data';
import { AppYesNoDialogComponent } from '@app/ui/dialogs/app-yesno-dialog/app-yesno-dialog.component';

@Component({
  selector: 'app-<%= dasherize(name) %>-list',
  templateUrl: './<%= dasherize(name) %>-list.component.html',
  styleUrls: ['./<%= dasherize(name) %>-list.component.css']
})
export class <%= classify(name) %>ListComponent implements OnInit, AfterViewInit {

  DEFAULT_PAGE_SIZE = 5;
  DEFAULT_FIRST_PAGE = 1;

  dataSource: <%= classify(name) %>ListDataSource;
  <%= camelize(name) %>Columns = ['name', 'description', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('search') search: ElementRef;

  constructor(private <%= camelize(name) %>Service: <%= classify(name) %>Service, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new <%= classify(name) %>ListDataSource(this.<%= camelize(name) %>Service);
    this.dataSource.find(null, this.DEFAULT_FIRST_PAGE, this.DEFAULT_PAGE_SIZE, null);
  }

  ngAfterViewInit() {

    this.sort.sortChange.pipe(tap(() => this.paginator.pageIndex = 0)).subscribe(() => this.find());
    this.paginator.page.subscribe(() => this.find());

    fromEvent(this.search.nativeElement, 'keyup').pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.paginator.pageIndex = 0)
    ).subscribe(() => this.find());

  }

  private find() {
    this.dataSource.find(this.search.nativeElement.value, this.paginator.pageIndex + 1, this.paginator.pageSize, this.paramSort());
  }

  private paramSort(): Sort {
    return (this.sort.direction !== '') ? new Sort(this.sort.active, this.sort.direction) : null;
  }

  private confirmDeletion(<%= camelize(name) %>: <%= classify(name) %>) {
    // tslint:disable-next-line:max-line-length
    const message = new AppYesNoData('Delete <%= classify(name) %>?', `Are you sure that you want to delete ${<%= camelize(name) %>.name}?`, 'question_answer', 'question');
    this.dialog.open(AppYesNoDialogComponent, {data: message})
      .afterClosed()
      .subscribe((hasToDelete: boolean) => {
        if (hasToDelete) {
          this.<%= camelize(name) %>Service.delete(<%= camelize(name) %>).subscribe(onDelete<%= classify(name) %>Success, onDelete<%= classify(name) %>Error);
        }
      });

      const onDelete<%= classify(name) %>Success = (value: any) => {
        const deleteMessage = new AppMessageData('Delete <%= classify(name) %>', '<%= classify(name) %> deleted successfully', 'done', 'success');
        this.dialog.open(AppMessageDialogComponent, {data: deleteMessage});
        this.find();
      };

      const onDelete<%= classify(name) %>Error = (error: any) => {
        const deleteMessage = new AppMessageData('Delete <%= classify(name) %>', error.message, 'error_outline', 'error');
        this.dialog.open(AppMessageDialogComponent, {data: deleteMessage});
      };

  }

}
