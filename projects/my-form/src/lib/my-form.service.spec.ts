import { TestBed } from '@angular/core/testing';
import { FormBase } from './my-form.interface';
import { UntypedFormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MyFormComponent } from './my-form.component';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MyFormService } from './my-form.service';
import { myForm } from './my-form.mock';

describe('MyFormService', () => {
  let service: MyFormService;
  let formMock: FormBase<string>[] = myForm;
  let fb: UntypedFormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MyFormComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule
      ],
    }).compileComponents();
    service = TestBed.inject(MyFormService);
    fb = TestBed.inject(UntypedFormBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a FormGroup with the value from mock', () => {
    const formGroupGenerate = service.toFormGroup(formMock);
    const formGroup = fb.group({
      'Full name': [''],
      Zipcode: [''],
      Address: [''],
    });
    expect(formGroupGenerate.value).toEqual(formGroup.value);
  });

  it('should return a FormGroup with validators required', () => {
    const formGroupGenerate = service.toFormGroup(formMock);
    const input = formGroupGenerate.get('Full name');
    input?.setValue('');
    expect(input?.valid).toBeFalse();
    input?.setValue('1234abcd');
    expect(formGroupGenerate.valid).toBeTrue();
  });

  it('should return a FormGroup with validators length', () => {
    const formGroupGenerate = service.toFormGroup(formMock);
    const input = formGroupGenerate.get('Zipcode');
    input?.setValue('1234');
    expect(input?.valid).toBeFalse();
    input?.setValue('12345');
    expect(input?.valid).toBeTrue();
  });
});
