import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupWithCustomChildComponent } from './form-group-with-custom-child.component';

describe('FormGroupWithCustomChildComponent', () => {
  let component: FormGroupWithCustomChildComponent;
  let fixture: ComponentFixture<FormGroupWithCustomChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupWithCustomChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupWithCustomChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
