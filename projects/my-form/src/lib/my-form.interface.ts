export class FormBase<T> {
    value?: T|undefined;
    key?: string;
    label: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type: string;
    options?: {
        placeholder?: string;
        valueType?: string;
        length?: number;
    } | null;
  
    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: {
            placeholder?: string;
            valueType?: string;
            length?: number;
        } | null;
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options || null;
    }
}