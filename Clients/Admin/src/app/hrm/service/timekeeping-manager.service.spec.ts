/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimekeepingManagerService } from './timekeeping-manager.service';

describe('Service: TimekeepingManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimekeepingManagerService]
    });
  });

  it('should ...', inject([TimekeepingManagerService], (service: TimekeepingManagerService) => {
    expect(service).toBeTruthy();
  }));
});
