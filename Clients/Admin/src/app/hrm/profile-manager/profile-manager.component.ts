import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { SecondPageEditBase, SecondPageIndexBase } from 'vnpost-shared';
import { ProfileManagerService } from '../service/profile-manager.service';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ProfileManagerAddComponent } from './profile-manager-add/profile-manager-add.component';
import { ProfileManagerEditComponent } from './profile-manager-edit/profile-manager-edit.component';

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.css']
})
export class ProfileManagerComponent extends SecondPageIndexBase implements OnInit {

  @ViewChild('pCreate', { static: false }) pCreate: ProfileManagerAddComponent;
  @ViewChild('pEdit', { static: false }) pEdit: ProfileManagerEditComponent;
  code: any;
  setWidth: string = '100%';
  formGroup: UntypedFormGroup;

  constructor(
    protected _service: ProfileManagerService,
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
        field: 'id',
        header: 'Mã nhân viên',
        visible: true,
        sort: false,
        width: 15,
      },
      {
        field: 'fullName',
        header: 'Tên nhân viên',
        visible: true,
        sort: false,
        width: 15,
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
        width: 15,
      },
      {
        field: 'educationLevel',
        header: 'Trình độ học vấn',
        visible: true,
        sort: false,
        width: 15,
      },
      {
        field: 'labourContract',
        header: 'Hợp đồng',
        visible: true,
        sort: false,
        width: 15,
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
        fullName: 'Nguyễn Văn A',
        email: 'nguyenvana@gmail.com',
        department: 'Phòng kinh doanh',
        educationLevel: 'Đại học',
        labourContract: 'Hợp đồng lao động',
        startDate: '01/01/2021',
        endDate: '01/01/2022',
        action: 'action',
      },
      {
        id: 2,
        fullName: 'Nguyễn Văn B',
        email: 'nguyenvanb@gmail.com',
        department: 'Phòng kinh doanh',
        educationLevel: 'Đại học',
        labourContract: 'Hợp đồng lao động',
        startDate: '01/01/2023',
        endDate: '01/01/2024',
        action: 'action',
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
      name: item.fullName,
      email: item.email,
      educationLevel: 3,
      contract: 1,
      department: 1,
      position: 1,
      salary: 1000000,
      address: 'Hà Nội',
      phoneNumber: '0123456789',
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
