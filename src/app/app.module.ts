import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { BadFormExampleComponent } from './bad-form-example/bad-form-example.component';
import { FormWithChildrenComponent } from './form-with-children/form-with-children.component';
import { FormGroupWithCustomChildComponent } from './form-group-with-custom-child/form-group-with-custom-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormControlComponent } from './custom-form-control/custom-form-control.component';
import { ComplexFormControlComponent } from './complex-form-control/complex-form-control.component';
import { ComplexFormArrayComponent } from './complex-form-array/complex-form-array.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'regular', pathMatch: 'full' },
  { path: 'regular', component: FormExampleComponent },
  { path: 'bad', component: BadFormExampleComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    BadFormExampleComponent,
    FormWithChildrenComponent,
    FormGroupWithCustomChildComponent,
    CustomFormControlComponent,
    ComplexFormControlComponent,
    ComplexFormArrayComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
