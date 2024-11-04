import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SecondPageEditBase } from 'vnpost-shared';
import { DepartmentManagerService } from '../../service/department-manager.service';

@Component({
  selector: 'app-department-manager-edit',
  templateUrl: './department-manager-edit.component.html',
  styleUrls: ['./department-manager-edit.component.css']
})
export class DepartmentManagerEditComponent extends SecondPageEditBase
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

  onShowPopup(model: any) {
    this.validationSummary.resetErrorMessages();
    this.resetForm();

    if (model.id > 0) {
      this.itemDetail = model;
    }
  }

}
