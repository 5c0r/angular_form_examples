import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  formInstance: FormGroup;

  constructor(private readonly _fb: FormBuilder) {
    this.formInstance = this._fb.group({
      // Normal input , [ initialValue, ...validators]
      'textInput': ['', Validators.required],
      'boolInput': [false, Validators.requiredTrue],
      // A form control build by formBuilder
      'textControlInput': this._fb.control('Test', Validators.required)
    });

  }

  public onFormSubmit(): void {
    console.log('formInstance', this.formInstance.value);
  }

  ngOnInit() {
  }



}
