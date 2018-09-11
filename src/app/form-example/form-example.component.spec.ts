import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExampleComponent } from './form-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormExampleComponent', () => {
  let component: FormExampleComponent;
  let fixture: ComponentFixture<FormExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [FormExampleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have formInstance initialized', () => {
    expect(component.formInstance).toBeTruthy();
    const textInputPath = 'textInput'
    expect(component.formInstance.get('textInput')).toBeTruthy();
  })
});
