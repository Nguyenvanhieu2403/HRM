import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SecondPageEditBase } from 'vnpost-shared';
import { DepartmentManagerService } from '../../service/department-manager.service';

@Component({
  selector: 'app-department-manager-add',
  templateUrl: './department-manager-add.component.html',
  styleUrls: ['./department-manager-add.component.css']
})
export class DepartmentManagerAddComponent extends SecondPageEditBase
implements OnInit
{
  id: any;
  name: any;

  constructor(
    protected _service: DepartmentManagerService,
    protected messageService: MessageService,
    protected _injector: Injector
  ) {
    super(_service, _injector); 
    this.formGroup = new UntypedFormGroup({
      id: new UntypedFormControl(0),
      name: new UntypedFormControl('', [Validators.required]),
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
