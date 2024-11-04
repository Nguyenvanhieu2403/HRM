import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SecondPageEditBase } from 'vnpost-shared';
import { EducationLevelManagerService } from '../../service/education-level-manager.service';

@Component({
  selector: 'app-education-level-manager-edit',
  templateUrl: './education-level-manager-edit.component.html',
  styleUrls: ['./education-level-manager-edit.component.css']
})
export class EducationLevelManagerEditComponent extends SecondPageEditBase
implements OnInit
{

  educationLevelName: any;
  majorName: any;

  constructor(
    protected _service: EducationLevelManagerService,
    protected messageService: MessageService,
    protected _injector: Injector
  ) {
    super(_service, _injector); 
    this.formGroup = new UntypedFormGroup({
      educationLevelName: new UntypedFormControl('', [Validators.required]),
      majorName: new UntypedFormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  onShowPopup(model: any) {
    this.validationSummary.resetErrorMessages();
    this.resetForm();

    if (model.id > 0) {
      this.itemDetail = model;
    }
  }
}
