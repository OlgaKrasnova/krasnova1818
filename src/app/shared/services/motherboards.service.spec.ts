import { TestBed } from '@angular/core/testing';

import { MotherboardsApiService } from './motherboards-api.service';

describe('PersonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotherboardsApiService = TestBed.get(MotherboardsApiService);
    expect(service).toBeTruthy();
  });
});
