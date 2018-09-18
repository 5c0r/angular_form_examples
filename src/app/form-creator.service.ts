import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

// Let's not think this class as a service , but more like an utility class
export class FormCreation {

  private readonly _fb: FormBuilder;

  constructor(fb: FormBuilder) {
    this._fb = fb;
  }

  public buildInventorFormGroup(): FormGroup {
    return this._fb.group({
      'name': ['', Validators.required],
      'age': [12, Validators.min(10)]
    })
  }

  // Form Array creation is more...complicated I believe
  buildInventorFormArray(fromValue: any[]): FormArray {
    // Validators.minLength(1) does not really work => Use Validators.required instead
    // Ref : https://github.com/angular/angular/issues/20583
    const inventorsValidation = Validators.compose([Validators.maxLength(2), Validators.required]);
    const inventorsFormGroup = fromValue.map(x => { const group = this.buildInventorFormGroup(); group.setValue(x); return group });

    return this._fb.array(inventorsFormGroup, inventorsValidation)
  }

  public buildApplicantFormGroup(): FormGroup {
    return this._fb.group({
      'name': this._fb.control('', Validators.required),
      'age': this._fb.control(0, Validators.min(10))
    })
  }
}
