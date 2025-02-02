import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SecondPageEditBase } from 'vnpost-shared';
import { PositionManagerService } from '../../service/position-manager.service';

@Component({
  selector: 'app-position-manager-add',
  templateUrl: './position-manager-add.component.html',
  styleUrls: ['./position-manager-add.component.css']
})
export class PositionManagerAddComponent extends SecondPageEditBase
implements OnInit
{
  departmentCode: any;
  positionName: any;

  listDepartment: { label: string; value: number }[] = [
    { label: 'Phòng kinh doanh', value: 1 },
    { label: 'Phòng kỹ thuật', value: 2 },
    { label: 'Phòng nhân sự', value: 3 },
    { label: 'Phòng tài chính', value: 4 },
    { label: 'Phòng kế toán', value: 5 },
    { label: 'Phòng hành chính', value: 6 },
    { label: 'Phòng sản xuất', value: 7 },
    { label: 'Phòng nghiên cứu', value: 8 },
    { label: 'Khác', value: 9 },
  ];

  constructor(
    protected _service: PositionManagerService,
    protected messageService: MessageService,
    protected _injector: Injector
  ) {
    super(_service, _injector); 
    this.formGroup = new UntypedFormGroup({
      departmentCode: new UntypedFormControl('', [Validators.required]),
      positionName: new UntypedFormControl('', [Validators.required]),
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
