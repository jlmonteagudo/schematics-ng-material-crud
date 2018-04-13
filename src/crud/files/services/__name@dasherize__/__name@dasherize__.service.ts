import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { <%= classify(name) %> } from './<%= dasherize(name) %>';
import { environment } from '@app/../environments/environment';
import { Sort, ApiResponse, ServiceError } from '../common';

@Injectable()
export class <%= classify(name) %>Service {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/<%= endpoint %>`;
  }

  get(id: string): Observable<<%= classify(name) %>> {
    return this.http.get<<%= classify(name) %>>(`${this.apiUrl}/${id}`);
  }

  find(search: string, page: number, limit: number, sort: Sort): Observable<ApiResponse<<%= classify(name) %>>> {
    let params = new HttpParams();

    if (search) { params = params.set('q', search); }
    if (page) { params = params.set('page', page.toString()); }
    if (limit) { params = params.set('limit', limit.toString()); }
    if (sort) { params = params.set('sort', sort.URLparam()); }

    return this.http.get<ApiResponse<<%= classify(name) %>>>(this.apiUrl, {params});
  }

  insert(<%= camelize(name) %>: <%= classify(name) %>): Observable<<%= classify(name) %>> {
    return this.http.post<<%= classify(name) %>>(this.apiUrl, <%= camelize(name) %>).pipe(
      catchError(this.handleError)
    );
  }

  update(<%= camelize(name) %>: <%= classify(name) %>): Observable<<%= classify(name) %>> {
    return this.http.put<<%= classify(name) %>>(`${this.apiUrl}/${<%= camelize(name) %>.id}`, <%= camelize(name) %>).pipe(
      catchError(this.handleError)
    );
  }

  delete(<%= camelize(name) %>: <%= classify(name) %>): Observable<<%= classify(name) %>> {
    return this.http.delete<<%= classify(name) %>>(`${this.apiUrl}/${<%= camelize(name) %>.id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    const message = error.error ? error.error.message : error.statusText;
    return new ErrorObservable(new ServiceError(error.status.toString(), message));
  }

}
