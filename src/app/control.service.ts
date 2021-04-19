import { Injectable } from "@angular/core";


@Injectable()
export class ControlsService {
  private controls = [
    {
      key: 'firstName',
      label: 'First Name',
      type: 'input',
      validation: {
        required: true,
        regexp: '',
        min: 2,
        max: 20
      }
    },
    {
      key: 'maritalStatus',
      label: 'Marital Status',
      type: 'select',
      validation: {
        required: true
      },
      options: [{
        label: 'Married', value: 'M',
      },{
        label: 'Divorced', value: 'D',
      }]
    }
  ];

  getSchema() {
    return this.controls;
  }
}
