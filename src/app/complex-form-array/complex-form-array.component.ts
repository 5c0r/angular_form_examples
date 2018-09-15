import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, ControlContainer, Validators, FormGroup } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { FormCreation } from '../form-creator.service';

@Component({
  selector: 'app-complex-form-array',
  templateUrl: './complex-form-array.component.html',
  styleUrls: ['./complex-form-array.component.css']
})
export class ComplexFormArrayComponent implements OnInit {

  // @Input() formArray: FormArray;
  @Input() arrayName: string;

  formArrayInstance: FormArray;
  readonly formCreationUtil: FormCreation;

  constructor(private _fb: FormBuilder, private readonly controlContainer: ControlContainer) {

    this.formCreationUtil = new FormCreation(_fb);
    // TODO: This should work as a individual form group , that's why formInstance is also created here
    this.formArrayInstance = this.formCreationUtil.buildInventorFormArray();
  }

  public onAdd(): void {
    this.formArrayInstance.push(this.formCreationUtil.buildInventorFormGroup());
  }

  public onRemove(i: number): void {
    this.formArrayInstance.removeAt(i);
  }

  ngOnInit() {
    console.log('onInit', this.arrayName, this.controlContainer);
    // TODO: Should have been checked if the container is really a FormGroup
    // TODO: Whether this component should work without formControl/formControlName
    if (this.arrayName && this.controlContainer) {
      // (this.controlContainer.control as FormGroup).setControl(this.arrayName, this.formArrayInstance);
      console.log('get formArray from container ?', this.arrayName, this.controlContainer.control.get(this.arrayName));
      this.formArrayInstance = this.controlContainer.control.get(this.arrayName) as FormArray;
    }
  }

}
