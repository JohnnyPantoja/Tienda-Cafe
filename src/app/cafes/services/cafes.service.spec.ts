import { TestBed } from '@angular/core/testing';

import { CafesService } from './cafes.service';

describe('CafesService', () => {
  let service: CafesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
