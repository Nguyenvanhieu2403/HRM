import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { SecondPageIndexBase } from 'vnpost-shared';
import { TimekeepingManagerService } from '../service/timekeeping-manager.service';

@Component({
  selector: 'app-timekeeping-manager',
  templateUrl: './timekeeping-manager.component.html',
  styleUrls: ['./timekeeping-manager.component.css']
})
export class TimekeepingManagerComponent extends SecondPageIndexBase implements OnInit {

  code: any;
  setWidth: string = '100%';
  formGroup: UntypedFormGroup;

  constructor(
    protected _service: TimekeepingManagerService,
    protected _injector: Injector,
  ) { 
    super(_service, _injector);
    this.formGroup = new UntypedFormGroup({
      code: new UntypedFormControl(''),
    });
    
  }

  getCols() {
    this.cols = [
      {
        field: 'stt',
        header: 'STT',
        visible: true,
        sort: false,
        width: 15,
      },
      {
        field: 'employeeCode',
        header: 'Mã nhân viên',
        visible: true,
        sort: false,
        width: 15,
      },
      {
        field: 'employeeName',
        header: 'Tên nhân viên',
        visible: true,
        sort: false,
        width: 10,
      },
      {
        field: 'email',
        header: 'Email',
        visible: true,
        sort: false,
        width: 10,
      },
      {
        field: 'department',
        header: 'Phòng ban',
        visible: true,
        sort: false,
        width: 10,
      },
      {
        field: 'numberOfWorkingDays',
        header: 'Số ngày làm việc',
        visible: true,
        sort: false,
        width: 10,
      },
      {
        field: 'numberOfDaysOff',
        header: 'Số ngày nghỉ ',
        visible: true,
        sort: false,
        width: 10,
      },
    ];
  }

  ngOnInit() {
    this.getCols();
    this.dataSource = [
      {
        stt: 1,
        employeeCode: 'NV001',
        employeeName: 'Nguyễn Văn A',
        email: 'nguyenvana@gmail.com',
        department: 'Phòng kế toán',
        numberOfWorkingDays: 20,
        numberOfDaysOff: 2,
      },
      {
        stt: 2,
        employeeCode: 'NV002',
        employeeName: 'Nguyễn Văn B',
        email: 'nguyenvanb@gmail.com',
        department: 'Phòng nhân sự',
        numberOfWorkingDays: 22,
        numberOfDaysOff: 0,
      },
      {
        stt: 3,
        employeeCode: 'NV003',
        employeeName: 'Nguyễn Văn C',
        email: 'nguyenvanc@gmail.com',
        department: 'Phòng kỹ thuật',
        numberOfWorkingDays: 21,
        numberOfDaysOff: 1,
      },
    ]
  }

  onExportExcel() {
    this._notifierService.showSuccess("Xuất excel thành công");
  }

  onDelete(item: any) {
    this._notifierService
        .showConfirm("Bạn có chắc chắn muốn xóa không?")
        .then((res) => {
          if (res) {
            this._notifierService.showSuccess("Xóa thành công");
          }
        });
  }

  onViewDetail(item: any) {
    localStorage.setItem('timekeeping', JSON.stringify(item));
    this._router.navigate(['/timekeeping-manager-detail']);
  }
}
