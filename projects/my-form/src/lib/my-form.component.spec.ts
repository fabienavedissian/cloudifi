import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { MyFormComponent } from './my-form.component';
import { myForm } from './my-form.mock';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MyFormComponent', () => {
  let component: MyFormComponent;
  let fixture: ComponentFixture<MyFormComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFormComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    component.config = myForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the focus of input', async () => {
    const input = await loader.getHarness(MatInputHarness.with({selector: 'input'}));
    expect(await input.isFocused()).toBe(false);
    await input.focus();
    expect(await input.isFocused()).toBe(true);
  });

  it('should check the required of input', async () => {
    const input = await loader.getHarness(MatInputHarness.with({selector: 'input'}));
    expect(await input.isRequired()).toBe(true);
  });

  it('should not be readonly', async () => {
    const input = await loader.getHarness(MatInputHarness.with({selector: 'input'}));
    expect(await input.isReadonly()).toBe(false);
  });

  it('should get placeholder of the field', async () => {
    const input = await loader.getHarness(MatInputHarness.with({selector: 'input'}));
    expect(await input.getPlaceholder()).toBe('John Do');
  });
});
