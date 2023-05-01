import { TestBed } from '@angular/core/testing';

import { CafesService } from './cafes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CafesService', () => {
  let service: CafesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CafesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
