import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SecondPageEditBase } from 'vnpost-shared';
import { ProfileManagerService } from '../../service/profile-manager.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-manager-add',
  templateUrl: './profile-manager-add.component.html',
  styleUrls: ['./profile-manager-add.component.css']
})
export class ProfileManagerAddComponent 
extends SecondPageEditBase
implements OnInit
{
  listStatus: { label: string; value: number }[] = [
    { label: 'Đang áp dụng', value: 1 },
    { label: 'Ngừng áp dụng', value: 0 },
  ];

  listEducationLevel: { label: string; value: number }[] = [
    { label: 'Tiến sĩ', value: 1 },
    { label: 'Thạc sĩ', value: 2 },
    { label: 'Đại học', value: 3 },
    { label: 'Cao đẳng', value: 4 },
    { label: 'Trung cấp', value: 5 },
    { label: 'Khác', value: 6 },
  ];

  listLaborContract: { label: string; value: number }[] = [
    { label: 'Hợp đồng lao động', value: 1 },
    { label: 'Hợp đồng dài hạn', value: 2 },
    { label: 'Hợp đồng ngắn hạn', value: 3 },
    { label: 'Hợp đồng thử việc', value: 4 },
    { label: 'Hợp đồng khác', value: 5 },
  ];

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

  listPosition: { label: string; value: number }[] = [
    { label: 'Giám đốc', value: 1 },
    { label: 'Phó giám đốc', value: 2 },
    { label: 'Trưởng phòng', value: 3 },
    { label: 'Phó phòng', value: 4 },
    { label: 'Nhân viên', value: 5 },
    { label: 'Khác', value: 6 },
  ];
  id: any;
  name: any;
  email: any;
  educationLevel: any;
  contract: any;
  startDate: any;
  endDate: any;
  department: any;
  position: any;
  salary: any;
  address: any;
  phoneNumber: any;
  gender: any;
  dob: any;

  currentDate: any
  sixMonthsLater: any;

  constructor(
    protected _service: ProfileManagerService,
    protected messageService: MessageService,
    private cdr: ChangeDetectorRef,
    protected _injector: Injector
  ) {
    super(_service, _injector); 
    this.formGroup = new UntypedFormGroup({
      id: new UntypedFormControl(0),
      name: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [Validators.required]),
      educationLevel: new UntypedFormControl('', [Validators.required]),
      contract: new UntypedFormControl('', [Validators.required]),
      contractTime: new UntypedFormControl('', [Validators.required]),
      department: new UntypedFormControl('', [Validators.required]),
      position: new UntypedFormControl('', [Validators.required]),
      salary: new UntypedFormControl('', [Validators.required]),
      address: new UntypedFormControl('', [Validators.required]),
      phoneNumber: new UntypedFormControl('', [Validators.required]),
      gender: new UntypedFormControl(''),
      dob: new UntypedFormControl(''),
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
    this.currentDate = new Date();
    this.sixMonthsLater = new Date(this.currentDate);
    this.sixMonthsLater.setMonth(this.sixMonthsLater.getMonth() + 6);
    this.itemDetail.startDate = this.currentDate.toLocaleDateString();
    this.itemDetail.endDate = this.sixMonthsLater.toLocaleDateString();
    this.cdr.detectChanges();
  }

}
