import { TestBed } from '@angular/core/testing';

import { OrdenserviceService } from './ordenservice.service';

describe('OrdenserviceService', () => {
  let service: OrdenserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
