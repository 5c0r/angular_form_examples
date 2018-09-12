import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlContainer, FormGroup, FormBuilder, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.css']
})
export class CustomFormControlComponent implements OnInit, OnChanges, OnDestroy {

  @Input() formControl: FormControl;
  @Input() formControlName: string;

  formInstance: FormControl;

  constructor(private _fb: FormBuilder, private readonly controlContainer: ControlContainer) {
    this.formInstance = _fb.control('');

    console.log('CustoMFormControl controlContainer', controlContainer);
  }

  ngOnInit() {
    if (this.formControlName && this.controlContainer) {
      (this.controlContainer.control as FormGroup).setControl(this.formControlName, this.formInstance);
    }

    if (this.formControl && this.controlContainer) {
      this.formInstance = this.formControl;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnDestroy(): void {

  }

}
