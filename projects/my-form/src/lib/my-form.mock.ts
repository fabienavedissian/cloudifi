import { FormBase } from "./my-form.interface";

export const myForm: FormBase<string>[] = [
    { label: 'Full name', type: 'text', required: true, options: { placeholder: 'John Do' } },
    { label: 'Zipcode', type: 'text', options: { length: 5, valueType: 'numeric' } },
    { label: 'Address', type: 'address' }
  ];