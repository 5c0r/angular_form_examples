import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ControlContainer, FormBuilder, Validators } from '@angular/forms';
import { FormCreation } from '../form-creator.service';

@Component({
  selector: 'app-complex-form-control',
  templateUrl: './complex-form-control.component.html',
  styleUrls: ['./complex-form-control.component.css']
})
export class ComplexFormControlComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() formGroupName: string;

  formInstance: FormGroup;

  constructor(private _fb: FormBuilder, private readonly controlContainer: ControlContainer) {

    const formCreation = new FormCreation(this._fb);
    // TODO: This should work as a individual form group , that's why formInstance is also created here
    this.formInstance = formCreation.buildApplicantFormGroup();

    console.log('CustoMFormControl controlContainer', controlContainer);
  }

  ngOnInit() {

    // TODO: Should have been checked if the container is really a FormGroup
    // TODO: Whether this component should work without formControl/formControlName
    if (this.formGroupName && this.controlContainer) {
      (this.controlContainer.control as FormGroup).setControl(this.formGroupName, this.formInstance);
    }

    if (this.formGroup && this.controlContainer) {
      this.formInstance = this.formGroup;
    }
  }

}
