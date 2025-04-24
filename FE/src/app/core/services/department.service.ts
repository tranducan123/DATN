import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { Department } from '../model/db.model';
@Injectable({
  providedIn: 'root',
})
export class DepartmentService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllDepartment(): Observable<ODataResponse> {
    let url = '/Departments?$Orderby=DepartmentId DESC';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Department> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Department
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getDepartmentById(Id: any): Observable<ODataResponse> {
    let url = `/Departments?$filter=Id eq ${Id}&$expand=Requests
&$expand=Warehouses
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Department> = this.jsonConvert.deserializeArray(
          odateRes.value,
          Department
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateDepartment(formData: any): Observable<Department> {
    let url = `/Departments`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateDepartment(formData: any, Id: any): Observable<Department> {
    let url = `/Departments`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteDepartment(id: any): Observable<Department> {
    return super.deleteEntity('/Departments', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getDepartmentByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/Departments?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Department> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Department
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
