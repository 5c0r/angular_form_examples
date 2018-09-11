import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadFormExampleComponent } from './bad-form-example.component';

describe('BadFormExampleComponent', () => {
  let component: BadFormExampleComponent;
  let fixture: ComponentFixture<BadFormExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadFormExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
