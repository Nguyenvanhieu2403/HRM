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
        field: 'educationName',
        header: 'Tên trình độ',
        visible: true,
        sort: false,
        width: 15,
      },
      {
        field: 'major',
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
    this.getData();
  }

  search() {
    this.pageIndex = 1;
    this.pageSize = 20;
    this.totalRecord = 0;
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.code = this.code ? this.code.trim() : '';
    var model = {
      code: this.code ?? null,
      pageNo: this.pageIndex - 1,
      pageSize: this.pageSize,
    };

    this._service
      .getAllEducationLevel(model)
      .then((res) => {
        if (res) {
          this.dataSource = res.data;
          this.totalRecord = res.totalRecord;
        }
      })
      .finally(() => (this.isLoading = false));
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
