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
  educationLevelId: any;
  educationName: any;
  major: any;

  constructor(
    protected _service: EducationLevelManagerService,
    protected messageService: MessageService,
    protected _injector: Injector
  ) {
    super(_service, _injector); 
    this.formGroup = new UntypedFormGroup({
      educationLevelId: new UntypedFormControl('', [Validators.required]),
      educationName: new UntypedFormControl('', [Validators.required]),
      major: new UntypedFormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  onShowPopup(model: any) {
    this.validationSummary.resetErrorMessages();
    this.resetForm();

    if (model.id > 0) {
      this._service.getById(model.id).then(
        (rs) => {
          this.itemDetail = rs.data;
        },
        (error) => {
          this._notifierService.showWarning(
            this._translateService.instant('MESSAGE.NOT_FOUND_ERROR')
          );
        }
      );
    }
  }

  async save() {
    if (this.formGroup.invalid) {
      this.submitting = false;
      this.validationSummary.showValidationSummary();
      return;
    }
    this.onUpdate();
  }

  onUpdate() {
    const model = {
      id: this.itemDetail.id,
      educationName: this.itemDetail.educationName,
      major: this.itemDetail.major,
      status: this.itemDetail.status,
    }
    this.submitting = true;
    this._service.updateEducationLevel(this.itemDetail.id, model).then(
      (response) => {
        this.closePopupMethod(true);
        this._notifierService.showUpdateDataSuccess();
        this.onAfterSave();
        this.submitting = false;
      },
      (error) => {
        this._notifierService.showUpdateDataFailed();
        this.submitting = false;
      }
    );
  }
}
