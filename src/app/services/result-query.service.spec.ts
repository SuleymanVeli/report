import { TestBed } from '@angular/core/testing';

import { ResultQueryService } from './result-query.service';

describe('ResultQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultQueryService = TestBed.get(ResultQueryService);
    expect(service).toBeTruthy();
  });
});
