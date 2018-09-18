import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { FormCreation } from '../form-creator.service';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit, AfterContentChecked {

  formInstance: FormGroup;
  formCreationUtil: FormCreation;

  constructor(private readonly _fb: FormBuilder) {

    this.formCreationUtil = new FormCreation(_fb);

    this.formInstance = this._fb.group({
      // Normal input , [ initialValue, ...validators]
      'textInput': ['', Validators.required],
      'boolInput': [false, Validators.requiredTrue],
      // A form control build by formBuilder
      'textControlInput': this.buildATextControl(),
      // A form control as child component
      'childControl': this._fb.control('Halo', Validators.required),
      // A form group as child component
      'complexApplicant': this.formCreationUtil.buildApplicantFormGroup(),
      'inventors': this.formCreationUtil.buildInventorFormArray([])

      // TODO: Build a read-only text-control ?
    });
  }

  private buildATextControl() {
    let textControl = this._fb.control('Hello', Validators.required);
    // textControl.

    return textControl;
  }


  ngOnInit() {

    // Assume we get a response from API
    const newValue = {
      ...this.formInstance.value,
      inventors: [
        { name: 'Halo', age: 10 }, { name: 'John', age: 20 }
      ]
    }

    // Yes, FormArray will be difficult to tame
    this.formInstance.setControl('inventors', this.formCreationUtil.buildInventorFormArray(newValue.inventors));
    
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
