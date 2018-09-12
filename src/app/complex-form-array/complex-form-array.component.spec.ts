import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormArrayComponent } from './complex-form-array.component';

describe('ComplexFormArrayComponent', () => {
  let component: ComplexFormArrayComponent;
  let fixture: ComponentFixture<ComplexFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
