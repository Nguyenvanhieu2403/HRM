import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { SecondPageIndexBase } from 'vnpost-shared';
import { DepartmentManagerAddComponent } from './department-manager-add/department-manager-add.component';
import { DepartmentManagerEditComponent } from './department-manager-edit/department-manager-edit.component';
import { DepartmentManagerService } from '../service/department-manager.service';

@Component({
  selector: 'app-department-manager',
  templateUrl: './department-manager.component.html',
  styleUrls: ['./department-manager.component.css']
})
export class DepartmentManagerComponent extends SecondPageIndexBase implements OnInit {

  @ViewChild('pCreate', { static: false }) pCreate: DepartmentManagerAddComponent;
  @ViewChild('pEdit', { static: false }) pEdit: DepartmentManagerEditComponent;
  code: any;
  setWidth: string = '100%';
  formGroup: UntypedFormGroup;

  constructor(
    protected _service: DepartmentManagerService,
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
        field: 'departmentName',
        header: 'Tên phòng ban',
        visible: true,
        sort: false,
        width: 15,
      },
      {
        field: 'departmentCode',
        header: 'Mã phòng ban',
        visible: true,
        sort: false,
        width: 10,
      },
      {
        field: 'generalinchief',
        header: 'Tên trưởng phòng',
        visible: true,
        sort: false,
        width: 10,
      },
      {
        field: 'amount',
        header: 'Số lượng nhân viên',
        visible: true,
        sort: false,
        width: 10,
      },
      {
        field: 'action',
        header: 'Hành động',
        visible: true,
        sort: false,
        width: 15,
      },
    ];
  }

  ngOnInit() {
    this.getCols();
    this.dataSource = [
      {
        id: 1,
        departmentName: 'Phòng kinh doanh',
        departmentCode: 'PKD',
        generalinchief: 'Nguyễn Văn A',
        amount: 10,
      },
      {
        id: 2,
        departmentName: 'Phòng kế toán',
        departmentCode: 'PKT',
        generalinchief: 'Nguyễn Văn B',
        amount: 5,
      },
      {
        id: 3,
        departmentName: 'Phòng nhân sự',
        departmentCode: 'PNS',
        generalinchief: 'Nguyễn Văn C',
        amount: 7,
      },
    ]
  }

  onAdd() {
    this.pCreate.showPopup();
  }

  onEdit(item: any) {
    // if (item && item.id)
    var model = {
      id: item.id,
      name: item.departmentName,
    };
    this.pEdit.showPopup(model);
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

}
