import { TestBed } from '@angular/core/testing';

import { AguardService } from './aguard.service';

describe('AguardService', () => {
  let service: AguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
