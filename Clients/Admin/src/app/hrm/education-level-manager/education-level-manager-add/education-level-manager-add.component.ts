import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SecondPageEditBase } from 'vnpost-shared';
import { EducationLevelManagerService } from '../../service/education-level-manager.service';

@Component({
  selector: 'app-education-level-manager-add',
  templateUrl: './education-level-manager-add.component.html',
  styleUrls: ['./education-level-manager-add.component.css']
})
export class EducationLevelManagerAddComponent extends SecondPageEditBase
implements OnInit
{
  educationLevelId: any;
  educationLevelName: any;
  majorName: any;

  constructor(
    protected _service: EducationLevelManagerService,
    protected messageService: MessageService,
    protected _injector: Injector
  ) {
    super(_service, _injector); 
    this.formGroup = new UntypedFormGroup({
      educationLevelId: new UntypedFormControl('', [Validators.required]),
      educationLevelName: new UntypedFormControl('', [Validators.required]),
      majorName: new UntypedFormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  onShowPopup() {
    this.validationSummary.resetErrorMessages();
    this.resetForm();
    this.onReset();
    this.itemDetail.id = 0;
    this.getEducationLevelId();
    this.itemDetail.status = 1;
  }

  getEducationLevelId() {
    this._service.getEducationLevelId().then((res) => {
      if (res) {
        this.itemDetail.id = res.data;
      }
    });
  }

  save() {
    if (this.formGroup.invalid) {
      this.validationSummary.showValidationSummary();
      return;
    }
    this.submitting = true;
    const model = {
      id: this.itemDetail.id,
      educationName: this.itemDetail.educationLevelName,
      major: this.itemDetail.majorName,
      status: this.itemDetail.status,
    }
    this._service.addEducationLevel(model)
    .then((response) => {
      this.closePopupMethod(true);
      this._notifierService.showInsertDataSuccess();
      this.onAfterSave();
      this.submitting = false;
    },
    (error) => {
      this._notifierService.showError(
        'Thêm mới thất bại: ' + error.error.message
      );
      this.submitting = false;
    }
  )
  .finally(() => {
    this.submitting = false;
    this.itemDetail.id = 0;
    this.itemDetail.status = 1;
    this.itemDetail.educationLevelName = '';
    this.itemDetail.majorName = '';
  });
  }

}
