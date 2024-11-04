import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { SecondPageIndexBase } from 'vnpost-shared';
import { PositionManagerService } from '../service/position-manager.service';
import { PositionManagerAddComponent } from './position-manager-add/position-manager-add.component';
import { PositionManagerEditComponent } from './position-manager-edit/position-manager-edit.component';

@Component({
  selector: 'app-position-manager',
  templateUrl: './position-manager.component.html',
  styleUrls: ['./position-manager.component.css']
})
export class PositionManagerComponent extends SecondPageIndexBase implements OnInit {

  @ViewChild('pCreate', { static: false }) pCreate: PositionManagerAddComponent;
  @ViewChild('pEdit', { static: false }) pEdit: PositionManagerEditComponent;
  code: any;
  setWidth: string = '100%';
  formGroup: UntypedFormGroup;

  constructor(
    protected _service: PositionManagerService,
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
        field: 'positionName',
        header: 'Chức vụ',
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
        departmentCode: 1,
        positionName: 'Trưởng phòng',
      },
      {
        id: 2,
        departmentName: 'Phòng kinh doanh',
        departmentCode: 1,
        positionName: 'Nhân viên',
      },
      {
        id: 3,
        departmentName: 'Phòng kế toán',
        departmentCode: 5,
        positionName: 'Trưởng phòng',
      },
      {
        id: 4,
        departmentName: 'Phòng kế toán',
        departmentCode: 5,
        positionName: 'Nhân viên',
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
      departmentCode: item.departmentCode,
      departmentName: item.departmentName,
      positionName: item.positionName,
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
