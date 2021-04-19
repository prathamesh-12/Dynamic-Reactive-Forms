import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-select',
  styleUrls: ['form-select.component.css'],
  template: `
    <div
      class="dynamic-field form-select"
      [formGroup]="group">
      <label>{{ config.label }}</label>

      <select [formControlName]="config.name" title="{{config.tooltip}}">
        <option value="" >{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options" value="{{option.value}}">
          {{ option.label }}
        </option>
      </select>
      <span>i</span>
    </div>
  `
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
