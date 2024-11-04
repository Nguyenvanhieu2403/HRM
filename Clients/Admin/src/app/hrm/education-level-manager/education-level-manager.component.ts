import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { SecondPageIndexBase } from 'vnpost-shared';
import { EducationLevelManagerService } from '../service/education-level-manager.service';
import { EducationLevelManagerAddComponent } from './education-level-manager-add/education-level-manager-add.component';
import { EducationLevelManagerEditComponent } from './education-level-manager-edit/education-level-manager-edit.component';

@Component({
  selector: 'app-education-level-manager',
  templateUrl: './education-level-manager.component.html',
  styleUrls: ['./education-level-manager.component.css']
})
export class EducationLevelManagerComponent extends SecondPageIndexBase implements OnInit {

  @ViewChild('pCreate', { static: false }) pCreate: EducationLevelManagerAddComponent;
  @ViewChild('pEdit', { static: false }) pEdit: EducationLevelManagerEditComponent;
  code: any;
  setWidth: string = '100%';
  formGroup: UntypedFormGroup;

  constructor(
    protected _service: EducationLevelManagerService,
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
        field: 'educationLevelName',
        header: 'Tên trình độ',
        visible: true,
        sort: false,
        width: 15,
      },
      {
        field: 'majorName',
        header: 'Tên chuyên ngành',
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
        educationLevelName: 'Đại học',
        majorName: 'Công nghệ thông tin',
      },
      {
        id: 2,
        educationLevelName: 'Cao đẳng',
        majorName: 'Kế toán',
      },
      {
        id: 3,
        educationLevelName: 'Trung cấp',
        majorName: 'Kỹ thuật điện',
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
      educationLevelName: item.educationLevelName,
      majorName: item.majorName,
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
