/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EducationLevelManagerAddComponent } from './education-level-manager-add.component';

describe('EducationLevelManagerAddComponent', () => {
  let component: EducationLevelManagerAddComponent;
  let fixture: ComponentFixture<EducationLevelManagerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationLevelManagerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationLevelManagerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
