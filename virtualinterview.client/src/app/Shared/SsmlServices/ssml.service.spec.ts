import { TestBed } from '@angular/core/testing';

import { SsmlService } from './ssml.service';

describe('SsmlService', () => {
  let service: SsmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
