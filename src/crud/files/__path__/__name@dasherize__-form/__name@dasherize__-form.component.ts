import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { <%= classify(name) %> } from '@app/services/<%= dasherize(name) %>/<%= dasherize(name) %>';

@Component({
  selector: 'app-<%= dasherize(name) %>-form',
  templateUrl: './<%= dasherize(name) %>-form.component.html',
  styleUrls: ['./<%= dasherize(name) %>-form.component.css']
})
export class <%= classify(name) %>FormComponent implements OnChanges {

  <%= camelize(name) %>Form: FormGroup;
  @Input() <%= camelize(name) %>: <%= classify(name) %>;
  @Output() submit = new EventEmitter<<%= classify(name) %>>();
  @Output() cancel = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.createForm();
    if (this.<%= camelize(name) %>) { this.<%= camelize(name) %>Form.patchValue(this.<%= camelize(name) %>); }
  }

  createForm(): void {
    this.<%= camelize(name) %>Form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.<%= camelize(name) %> = changes.<%= camelize(name) %>.currentValue;
    if (this.<%= camelize(name) %>) { this.<%= camelize(name) %>Form.patchValue(this.<%= camelize(name) %>); }
  }

  onSubmit(): void {
    const <%= camelize(name) %> = { ...this.<%= camelize(name) %>, ...this.<%= camelize(name) %>Form.value };
    this.submit.emit(<%= camelize(name) %>);
  }

  onCancel(): void {
    this.cancel.emit();
  }

}
