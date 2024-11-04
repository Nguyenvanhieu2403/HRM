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

  onShowPopup() {
    this.validationSummary.resetErrorMessages();
    this.resetForm();
    this.onReset();

    this.itemDetail.id = 0;
    this.itemDetail.status = 1;
  }

}
