import { TestBed } from '@angular/core/testing';

import { FormCreatorService } from './form-creator.service';

describe('FormCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormCreatorService = TestBed.get(FormCreatorService);
    expect(service).toBeTruthy();
  });
});
