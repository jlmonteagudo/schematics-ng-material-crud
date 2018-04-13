import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { <%= classify(name) %>Service } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>.service';
import { <%= classify(name) %> } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>';

@Injectable()
export class <%= classify(name) %>DetailResolver implements Resolve<<%= classify(name) %>> {

  constructor(private <%= camelize(name) %>Service: <%= classify(name) %>Service) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<<%= classify(name) %>> {
    const id: string = route.paramMap.get('id');
    return this.<%= camelize(name) %>Service.get(id);
  }
}
