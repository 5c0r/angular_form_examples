import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit, AfterContentChecked {

  formInstance: FormGroup;

  constructor(private readonly _fb: FormBuilder) {
    this.formInstance = this._fb.group({
      // Normal input , [ initialValue, ...validators]
      'textInput': ['', Validators.required],
      'boolInput': [false, Validators.requiredTrue],
      // A form control build by formBuilder
      'textControlInput': this._fb.control('Test', Validators.required),
      // A form control as child component
      'childControl': this._fb.control('Halo', Validators.required),
      // A form group as child component
      'complexApplicant': this._fb.group({
        'name': ['', Validators.required],
        'age': [10, Validators.min(10)]
      }),
      'inventors': this.buildInventorFormArray(false)
    });
  }

  buildInventorFormArray(isEmpty: boolean): FormArray {
    const inventorsValidation = Validators.maxLength(2);
    return isEmpty ? this._fb.array([], inventorsValidation) : this._fb.array([this._fb.group({
      'name': ['', Validators.required],
      'age': [12, Validators.min(10)]
    })], inventorsValidation)
  }

  ngOnInit() {

    // Assume we get a response from API
    const newValue = {
      ...this.formInstance.value,
      inventors: []
    }

    // Yes, FormArray will be difficult to tame
    if (newValue.inventors.length === 0) this.formInstance.setControl('inventors', this.buildInventorFormArray(true));
    this.formInstance.setValue(newValue);
  }


  public onFormSubmit(): void {
    // TODO: What's the point of form value manipulation here , waste of time ,waste of brain
    console.log('formInstance.value', this.formInstance.value);

    // TODO: Http submit form value plz plz
  }


  ngAfterContentChecked() {



  }




}
