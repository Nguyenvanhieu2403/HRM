/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DepartmentManagerService } from './department-manager.service';

describe('Service: DepartmentManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentManagerService]
    });
  });

  it('should ...', inject([DepartmentManagerService], (service: DepartmentManagerService) => {
    expect(service).toBeTruthy();
  }));
});
