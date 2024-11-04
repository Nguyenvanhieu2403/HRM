import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SecondPageEditBase } from 'vnpost-shared';
import { LaborContractManagerService } from '../../service/labor-contract-manager.service';

@Component({
  selector: 'app-labor-contract-manager-add',
  templateUrl: './labor-contract-manager-add.component.html',
  styleUrls: ['./labor-contract-manager-add.component.css']
})
export class LaborContractManagerAddComponent extends SecondPageEditBase
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

  onShowPopup() {
    this.validationSummary.resetErrorMessages();
    this.resetForm();
    this.onReset();

    this.itemDetail.id = 0;
    this.itemDetail.status = 1;
  }

}
