/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EducationLevelManagerService } from './education-level-manager.service';

describe('Service: EducationLevelManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationLevelManagerService]
    });
  });

  it('should ...', inject([EducationLevelManagerService], (service: EducationLevelManagerService) => {
    expect(service).toBeTruthy();
  }));
});
