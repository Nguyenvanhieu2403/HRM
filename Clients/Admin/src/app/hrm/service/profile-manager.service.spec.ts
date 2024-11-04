/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfileManagerService } from './profile-manager.service';

describe('Service: ProfileManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileManagerService]
    });
  });

  it('should ...', inject([ProfileManagerService], (service: ProfileManagerService) => {
    expect(service).toBeTruthy();
  }));
});
