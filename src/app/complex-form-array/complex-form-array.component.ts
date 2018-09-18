import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, ControlContainer } from '@angular/forms';
import { FormCreation } from '../form-creator.service';

@Component({
  selector: 'app-complex-form-array',
  templateUrl: './complex-form-array.component.html',
  styleUrls: ['./complex-form-array.component.css']
})
export class ComplexFormArrayComponent implements OnInit {

  readonly inventorList: string[] = ['Jane', 'John', 'Joe'];
  public inventorSelection: any = 'Jane';

  // @Input() formArray: FormArray;
  @Input() arrayName: string;

  formArrayInstance: FormArray;
  readonly formCreationUtil: FormCreation;

  public addToggle: boolean = false;

  constructor(private _fb: FormBuilder, private readonly controlContainer: ControlContainer) {

    this.formCreationUtil = new FormCreation(_fb);
    // TODO: This should work as a individual form group , that's why formInstance is also created here
    this.formArrayInstance = this.formCreationUtil.buildInventorFormArray([]);
  }

  public onAdd(): void {
    const newGroup = this.formCreationUtil.buildInventorFormGroup();
    newGroup.setValue({ name: this.inventorSelection, age: 0 });

    this.formArrayInstance.push(newGroup);
    this.addToggle = false;
  }

  public onRemove(i: number): void {
    this.formArrayInstance.removeAt(i);
  }

  public onAddRequest(): void {
    this.addToggle = true;
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
