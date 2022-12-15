import { TestBed } from '@angular/core/testing';

import { AuthentyService } from './authenty.service';

describe('AuthentyService', () => {
  let service: AuthentyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
