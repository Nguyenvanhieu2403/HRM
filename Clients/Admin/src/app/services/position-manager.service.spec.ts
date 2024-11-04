/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PositionManagerService } from '../hrm/service/position-manager.service';

describe('Service: PositionManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositionManagerService]
    });
  });

  it('should ...', inject([PositionManagerService], (service: PositionManagerService) => {
    expect(service).toBeTruthy();
  }));
});
