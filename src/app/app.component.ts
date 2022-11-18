import { Component } from '@angular/core';
import { FormBase } from 'projects/my-form/src/lib/my-form.interface';
import { myForm } from 'projects/my-form/src/lib/my-form.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myForm: FormBase<string>[] = myForm;

  public consoleLog(changes: FormBase<string>[]) {
    console.log(changes);
  }
}
