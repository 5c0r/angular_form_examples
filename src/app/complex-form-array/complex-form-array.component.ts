import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, ControlContainer, Validators, FormGroup } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-complex-form-array',
  templateUrl: './complex-form-array.component.html',
  styleUrls: ['./complex-form-array.component.css']
})
export class ComplexFormArrayComponent implements OnInit {

  // @Input() formArray: FormArray;
  @Input() arrayName: string;

  formArrayInstance: FormArray;

  constructor(private _fb: FormBuilder, private readonly controlContainer: ControlContainer) {

    // TODO: This should work as a individual form group , that's why formInstance is also created here
    this.formArrayInstance = _fb.array([this.createGroup()]);

    console.log('CustoMFormControl controlContainer', controlContainer);
  }

  private createGroup(): FormGroup {
    return this._fb.group({
      'name': this._fb.control('', Validators.required),
      'age': this._fb.control(0, Validators.min(10))
    })
  }

  public onAdd(): void {
    this.formArrayInstance.push(this.createGroup());
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
      this.formArrayInstance = this.controlContainer.control.get(this.arrayName) as FormArray;
    }
  }

}
