import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  options?: {label: string, value: string}[],
  placeholder?: string,
  default?: string,
  type: string,
  validation?: ValidatorFn[],
  tooltip?: string,
  value?: any
}
