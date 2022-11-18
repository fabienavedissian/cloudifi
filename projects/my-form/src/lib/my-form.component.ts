import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, UntypedFormGroup } from '@angular/forms';
import { pairwise } from 'rxjs';
import { FormBase } from './my-form.interface';
import { MyFormService } from './my-form.service';

@Component({
  selector: 'lib-myForm',
  templateUrl: './my-form.component.html',
  styles: [
  ]
})
export class MyFormComponent implements OnInit {

  @Input('config') config: FormBase<string>[] = [];
  @Output() valueChanges: EventEmitter<FormBase<string>[]> = new EventEmitter();

  public form!: UntypedFormGroup;

  constructor(private myFormService: MyFormService) {
  }

  ngOnInit(): void {
    this.form = this.myFormService.toFormGroup(this.config);
    this.form.valueChanges.pipe(pairwise()).subscribe(() => {
      this.onValueChanges();
    });
  }

  public onValueChanges(): void {
    this.valueChanges.emit(this.form.value);
  }

  public getInputControl(input: string): AbstractControl | null {
    return this.form.get(input);
  }

}
