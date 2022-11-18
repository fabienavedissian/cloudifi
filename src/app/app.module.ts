import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyFormModule } from 'projects/my-form/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
