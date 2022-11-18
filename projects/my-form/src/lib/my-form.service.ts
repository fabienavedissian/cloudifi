import { Injectable } from '@angular/core';
import { FormBase } from './my-form.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MyFormService {

  constructor() { }

  public toFormGroup(inputs: FormBase<string>[]): FormGroup {
    const group: any = {};
    inputs.forEach(input => {
      const validators = [];
      if (input.required) {
        validators.push(Validators.required);
      }
      if (input.options?.length) {
        validators.push(Validators.maxLength(input.options.length));
        validators.push(Validators.minLength(input.options.length));
      }
      group[input.key ? input.key : input.label] = validators.length > 0 ? new FormControl(input.value || '', validators) : new FormControl(input.value || '');
    });
    return new FormGroup(group);
  }

}
