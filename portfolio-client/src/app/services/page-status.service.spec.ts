import { TestBed, inject } from '@angular/core/testing';

import { PageStatusService } from './page-status.service';

describe('PageStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageStatusService]
    });
  });

  it('should be created', inject([PageStatusService], (service: PageStatusService) => {
    expect(service).toBeTruthy();
  }));
});
