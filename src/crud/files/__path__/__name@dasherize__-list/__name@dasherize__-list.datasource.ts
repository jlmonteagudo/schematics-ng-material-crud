import { catchError, finalize } from 'rxjs/operators';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { <%= classify(name) %> } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>';
import { <%= classify(name) %>Service } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>.service';
import { ApiResponse, Sort } from '@app/services/common';

export class <%= classify(name) %>ListDataSource implements DataSource<<%= classify(name) %>> {

  private <%= camelize(name) %>Subject = new BehaviorSubject<<%= classify(name) %>[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private countSubject = new BehaviorSubject<number>(0);

  public loading$ = this.loadingSubject.asObservable();
  public count$ = this.countSubject.asObservable();

  constructor(private <%= camelize(name) %>Service: <%= classify(name) %>Service) {}

  connect(collectionViewer: CollectionViewer): Observable<<%= classify(name) %>[]> {
    return this.<%= camelize(name) %>Subject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.<%= camelize(name) %>Subject.complete();
    this.loadingSubject.complete();
    this.countSubject.complete();
  }

  find(search: string, page: number, limit: number, sort: Sort) {
    this.loadingSubject.next(true);
    this.<%= camelize(name) %>Service.find(search, page, limit, sort).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((response: ApiResponse<<%= classify(name) %>>) => {
      this.<%= camelize(name) %>Subject.next(response.rows);
      this.countSubject.next(response.count);
    });
  }

}
