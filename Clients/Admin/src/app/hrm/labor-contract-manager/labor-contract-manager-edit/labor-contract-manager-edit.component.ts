import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SecondPageEditBase } from 'vnpost-shared';
import { LaborContractManagerService } from '../../service/labor-contract-manager.service';

@Component({
  selector: 'app-labor-contract-manager-edit',
  templateUrl: './labor-contract-manager-edit.component.html',
  styleUrls: ['./labor-contract-manager-edit.component.css']
})
export class LaborContractManagerEditComponent extends SecondPageEditBase
implements OnInit
{
  labourContractCode: any;
  labourContractName: any;
  labourContractType: any;

  constructor(
    protected _service: LaborContractManagerService,
    protected messageService: MessageService,
    protected _injector: Injector
  ) {
    super(_service, _injector); 
    this.formGroup = new UntypedFormGroup({
      labourContractCode: new UntypedFormControl(0),
      labourContractName: new UntypedFormControl('', [Validators.required]),
      labourContractType: new UntypedFormControl('', [Validators.required]),
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
