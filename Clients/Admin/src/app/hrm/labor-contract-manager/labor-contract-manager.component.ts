import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { SecondPageIndexBase } from 'vnpost-shared';
import { LaborContractManagerService } from '../service/labor-contract-manager.service';
import { LaborContractManagerAddComponent } from './labor-contract-manager-add/labor-contract-manager-add.component';
import { LaborContractManagerEditComponent } from './labor-contract-manager-edit/labor-contract-manager-edit.component';

@Component({
  selector: 'app-labor-contract-manager',
  templateUrl: './labor-contract-manager.component.html',
  styleUrls: ['./labor-contract-manager.component.css']
})
export class LaborContractManagerComponent extends SecondPageIndexBase implements OnInit {

  @ViewChild('pCreate', { static: false }) pCreate: LaborContractManagerAddComponent;
  @ViewChild('pEdit', { static: false }) pEdit: LaborContractManagerEditComponent;
  code: any;
  setWidth: string = '100%';
  formGroup: UntypedFormGroup;

  constructor(
    protected _service: LaborContractManagerService,
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
        field: 'labourContractCode',
        header: 'Mã hợp đồng',
        visible: true,
        sort: false,
        width: 15,
      },
      {
        field: 'labourContractName',
        header: 'Tên hợp đồng',
        visible: true,
        sort: false,
        width: 15,
      },
      {
        field: 'labourContractType',
        header: 'Loai hợp đồng',
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
        labourContractCode: 'HD001',
        labourContractName: 'Hợp đồng 1',
        labourContractType: 'Hợp đồng thử việc',
      },
      {
        id: 2,
        labourContractCode: 'HD002',
        labourContractName: 'Hợp đồng 2',
        labourContractType: 'Hợp đồng chính thức',
      },
      {
        id: 3,
        labourContractCode: 'HD003',
        labourContractName: 'Hợp đồng 3',
        labourContractType: 'Hợp đồng thử việc',
      },
      {
        id: 4,
        labourContractCode: 'HD004',
        labourContractName: 'Hợp đồng 4',
        labourContractType: 'Hợp đồng chính thức',
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
      labourContractCode: item.labourContractCode,
      labourContractName: item.labourContractName,
      labourContractType: item.labourContractType,
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
