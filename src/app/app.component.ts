import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AbstractControl, Validators, FormControl } from '@angular/forms';

import { FieldConfig } from './dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="submit($event)">
      </dynamic-form>
      {{ form.valid }}
      {{ form.value | json }}
    </div>
  `
})
export class AppComponent implements AfterViewInit  {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      default: '',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Marital Status',
      name: 'marital',
      options: [{ label: 'Married', value: 'M' }, { label: 'Divorced', value: 'D' }],
      placeholder: '-Select-',
      default: '',
      validation: [Validators.required],
      tooltip: 'Marital Status is used to add coverage'
    },
    {
      type: 'radio',
      label: 'Gender',
      name: 'gender',
      options: [{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }],
      placeholder: '',
      default: '',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;

    this.form.changes.subscribe(() => {
      if((this.form.valid !== previousValid)) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);

    for (let iField of this.config) {
      this.form.setValue(iField.name, iField.default);
    }
    // this.form.setValue('name', '');
    // this.form.setValue('marital', '-1');
  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }
}

const hasRequiredField = (abstractControl: AbstractControl): boolean => {
  if (abstractControl.validator) {
      const validator = abstractControl.validator({}as AbstractControl);
      if (validator && validator.required) {
          return true;
      }
  }
  if (abstractControl['controls']) {
      for (const controlName in abstractControl['controls']) {
          if (abstractControl['controls'][controlName]) {
              if (hasRequiredField(abstractControl['controls'][controlName])) {
                  return true;
              }
          }
      }
  }
  return false;
};
