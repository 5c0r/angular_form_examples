import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormControlComponent } from './complex-form-control.component';

describe('ComplexFormControlComponent', () => {
  let component: ComplexFormControlComponent;
  let fixture: ComponentFixture<ComplexFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
