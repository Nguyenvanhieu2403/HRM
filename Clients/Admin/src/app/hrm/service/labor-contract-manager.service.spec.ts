/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LaborContractManagerService } from './labor-contract-manager.service';

describe('Service: LaborContractManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaborContractManagerService]
    });
  });

  it('should ...', inject([LaborContractManagerService], (service: LaborContractManagerService) => {
    expect(service).toBeTruthy();
  }));
});
