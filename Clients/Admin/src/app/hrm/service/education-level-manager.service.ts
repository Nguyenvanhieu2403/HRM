import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'vnpost-shared';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducationLevelManagerService extends BaseService {
  constructor(http: HttpClient, injector: Injector) {
    super(http, injector, `${environment.apiDomain.HrmEndpoint}/educationLevel`);
  }

  getEducationLevelId(): Promise<any> {
    const apiUrl = `${this.serviceUri}/GetsEducationLevelId`;
    return this._http.get<any>(apiUrl)
      .pipe(catchError((err) => this.handleError(err, this._injector)))
      .toPromise();
  }

  addEducationLevel(data: any): Promise<any> {
    const apiUrl = `${this.serviceUri}`;
    return this._http.post<any>(apiUrl, data)
      .pipe(catchError((err) => this.handleError(err, this._injector)))
      .toPromise();
  }

  getAllEducationLevel(model: any): Promise<any> {
    const apiUrl = `${this.serviceUri}/GetsEducationLevel`;
    return this._http.post<any>(apiUrl, model)
      .pipe(catchError((err) => this.handleError(err, this._injector)))
      .toPromise();
  }
}
