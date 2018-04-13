import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { <%= classify(name) %> } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>';

@Component({
  selector: 'app-<%= dasherize(name) %>-detail',
  templateUrl: './<%= dasherize(name) %>-detail.component.html',
  styleUrls: ['./<%= dasherize(name) %>-detail.component.css']
})
export class <%= classify(name) %>DetailComponent implements OnInit {

  <%= camelize(name) %>: <%= classify(name) %>;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: any) => this.<%= camelize(name) %> = data.<%= camelize(name) %>);
  }

}
