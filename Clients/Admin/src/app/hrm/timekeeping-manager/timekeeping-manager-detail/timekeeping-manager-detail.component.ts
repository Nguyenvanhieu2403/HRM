import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { SecondPageIndexBase } from 'vnpost-shared';
import { TimekeepingManagerService } from '../../service/timekeeping-manager.service';

@Component({
  selector: 'app-timekeeping-manager-detail',
  templateUrl: './timekeeping-manager-detail.component.html',
  styleUrls: ['./timekeeping-manager-detail.component.css']
})
export class TimekeepingManagerDetailComponent extends SecondPageIndexBase implements OnInit {

  code: any;
  setWidth: string = '100%';
  formGroup: UntypedFormGroup;
  listTimeLine: any[] = [
    { label: 'Hôm nay', value: 1 },
    { label: 'Tuần này', value: 2 },
    { label: 'Tháng này', value: 3 },
    { label: 'Tuần trước', value: 4 },
    { label: 'Tháng trước', value: 5 },
  ];
  timeLine: any;
  employeeName: any;
  email: any;
  department: any;


  constructor(
    protected _service: TimekeepingManagerService,
    protected _injector: Injector,
  ) { 
    super(_service, _injector);
    this.formGroup = new UntypedFormGroup({
      code: new UntypedFormControl(''),
      timeLine: new UntypedFormControl('', [Validators.required]),
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
        field: 'date',
        header: 'Ngày',
        visible: true,
        sort: false,
        width: 15,
      },
      {
        field: 'checkin',
        header: 'Giờ vào',
        visible: true,
        sort: false,
        width: 10,
      },
      {
        field: 'checkOut',
        header: 'Giờ ra',
        visible: true,
        sort: false,
        width: 10,
      },
      {
        field: 'overTime',
        header: 'Thời gian làm thêm giờ (h)',
        visible: true,
        sort: false,
        width: 10,
      },
      {
        field: 'isOff',
        header: 'Nghỉ phép',
        visible: true,
        sort: false,
        width: 10,
      },
      {
        field: 'note',
        header: 'Ghi chú',
        visible: true,
        sort: false,
        width: 10,
      },
    ];
  }

  ngOnInit() {
    const timekeeping = JSON.parse(localStorage.getItem('timekeeping'));
    this.employeeName = timekeeping.employeeName;
    this.email = timekeeping.email;
    this.department = timekeeping.department;
    this.getCols();
    this.dataSource = [
      {
        stt: 1,
        date: '01/01/2021',
        checkin: '',
        checkOut: '',
        overTime: 2,
        isOff: true,
        note: 'Nghỉ phép'
      },
      {
        stt: 2,
        date: '02/01/2021',
        checkin: '08:00',
        checkOut: '17:00',
        overTime: 2,
        isOff: false,
        note: ''
      },
      {
        stt: 3,
        date: '03/01/2021',
        checkin: '08:00',
        checkOut: '17:00',
        overTime: 2,
        isOff: false,
        note: ''
      },
      {
        stt: 4,
        date: '04/01/2021',
        checkin: '08:00',
        checkOut: '17:00',
        overTime: 2,
        isOff: false,
        note: ''
      },
      {
        stt: 5,
        date: '05/01/2021',
        checkin: '08:00',
        checkOut: '17:00',
        overTime: 2,
        isOff: false,
        note: ''
      },
      {
        stt: 6,
        date: '06/01/2021',
        checkin: '08:00',
        checkOut: '17:00',
        overTime: 2,
        isOff: false,
        note: ''
      },
      {
        stt: 7,
        date: '07/01/2021',
        checkin: '08:00',
        checkOut: '17:00',
        overTime: 2,
        isOff: false,
        note: ''
      },
      {
        stt: 8,
        date: '08/01/2021',
        checkin: '08:00',
        checkOut: '17:00',
        overTime: 2,
        isOff: false,
        note: ''
      },
      {
        stt: 9,
        date: '09/01/2021',
        checkin: '08:00',
        checkOut: '17:00',
        overTime: 2,
        isOff: false,
        note: ''
      },
      {
        stt: 10,
        date: '10/01/2021',
        checkin: '08:00',
        checkOut: '17:00',
        overTime: 2,
        isOff: false,
        note: ''
      },
    ]
  }

  onExportExcel() {
    this._notifierService.showSuccess("Xuất excel thành công");
  }

  back() {
    this._router.navigate(['/timekeeping-manager']);
  }

}
