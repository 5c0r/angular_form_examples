import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { BadFormExampleComponent } from './bad-form-example/bad-form-example.component';
import { FormWithChildrenComponent } from './form-with-children/form-with-children.component';
import { FormGroupWithCustomChildComponent } from './form-group-with-custom-child/form-group-with-custom-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    BadFormExampleComponent,
    FormWithChildrenComponent,
    FormGroupWithCustomChildComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
