import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-radio',
  styleUrls: [],
  template: `
    <div
      class="dynamic-field form-input"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <span *ngFor="let option of config.options">
        <input
          type="radio"
          [formControlName]="config.name"
          value="{{option.value}}"
          >
          {{ option.label }}
      </span>
    </div>
  `
})
export class FormRadioComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
