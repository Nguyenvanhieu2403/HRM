import { Component, OnInit, ViewChild, Injector } from '@angular/core';

import { SecondPageEditBase, UserService, ExportService } from 'vnpost-shared';
import { FileUpload } from 'primeng/fileupload';
import { UserTypeId } from '../../../config/enums';
import { saveAs } from 'file-saver';
import { CoreUserService } from '../../services/core-user.service';

@Component({
  selector: 'app-users-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class UsersImportComponent extends SecondPageEditBase implements OnInit {

  @ViewChild('fileControl') fileControl: FileUpload;
  rawFileName = '';
  isUploading = false;
  constructor(
    protected _userService: UserService,
    protected _coreUserService: CoreUserService,
    protected _injector: Injector,
    protected _exportService: ExportService,
  ) {
    super(_userService, _injector);
  }

  ngOnInit() {
  }

  myUploader(event) {
    const files = event.files;
    if (files.length > 0) {
      this.submitting = true;
      this.isUploading = true;
      this.rawFileName = files[0].name;
      const formData: FormData = new FormData();
      formData.append(this.rawFileName, files[0]);
      formData.append("typeId", UserTypeId.User.toString());
      if (this.currentUser.issuperuser) {
        this._coreUserService.importUsersRoot(formData).then(rs => {
          if (rs.data?.fileError) {
            var base64Data = rs?.data?.fileError.fileContents;
            const base64DataCleaned = base64Data.replace(/^data:([A-Za-z-+/]+);base64,/, '');
            const blob = this.base64ToBlob(base64DataCleaned, rs.data?.fileError.contentType)
            saveAs(blob, `ImportNguoidung_ketqua.xlsx`);
          }
          this._notifierService.showSuccess(rs.data.message);
          this.submitting = false;
          this.isUploading = false;
          this.closePopupMethod(true);
        }).catch(err => {
          console.log('Có lỗi xảy ra, vui lòng thử lại ' + err);
          this.submitting = false;
          this.isUploading = false;
        });
      }
      else {
        this._userService.importUsers(formData).then(rs => {
          if (rs.data?.fileError) {
            var base64Data = rs?.data?.fileError.fileContents;
            const base64DataCleaned = base64Data.replace(/^data:([A-Za-z-+/]+);base64,/, '');
            const blob = this.base64ToBlob(base64DataCleaned, rs.data?.fileError.contentType)
            saveAs(blob, `ImportNguoidung_ketqua.xlsx`);
          }
          this._notifierService.showSuccess(rs.data.message);
          this.submitting = false;
          this.isUploading = false;
          this.closePopupMethod(true);
        }).catch(err => {
          console.log('Có lỗi xảy ra, vui lòng thử lại ' + err);
          this.submitting = false;
          this.isUploading = false;
        });
      }
    }
     
  }
  base64ToBlob(base64Data: string, contentType: string): Blob {
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }
  onShowPopup(data: any) {
  }
  onUpload() {
    this.fileControl.upload();
  }
  downloadForm() {
    const link = document.createElement('a');
    link.href = './assets/template/ImportNguoidung.xlsx'; // Đường dẫn tới file mẫu
    link.download = 'ImportNguoidung.xlsx'; // Tên file khi tải xuống
    link.click();
  }
}

