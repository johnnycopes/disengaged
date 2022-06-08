import { TestBed } from '@angular/core/testing';

import { DisengagedService } from './disengaged.service';

describe('DisengagedService', () => {
  let service: DisengagedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisengagedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
