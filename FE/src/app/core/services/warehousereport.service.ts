import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { WarehouseReport } from '../model/db.model';

@Injectable({
  providedIn: 'root',
})
export class WarehouseReportService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllWarehouseReport(): Observable<ODataResponse> {
    let url = '/WarehouseReports?$Orderby=Id DESC';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<WarehouseReport> = this.jsonConvert.deserializeArray(
          odataRes.value,
          WarehouseReport
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getWarehouseReportById(Id: any): Observable<ODataResponse> {
    let url = `/WarehouseReports?$filter=Id eq ${Id}&$expand=Material
&$expand=Warehouse
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<WarehouseReport> = this.jsonConvert.deserializeArray(
          odateRes.value,
          WarehouseReport
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateWarehouseReport(formData: any): Observable<WarehouseReport> {
    let url = `/WarehouseReports`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateWarehouseReport(formData: any, Id: any): Observable<WarehouseReport> {
    let url = `/WarehouseReports`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteWarehouseReport(id: any): Observable<WarehouseReport> {
    return super.deleteEntity('/WarehouseReports', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getWarehouseReportByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/WarehouseReports?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<WarehouseReport> = this.jsonConvert.deserializeArray(
          odataRes.value,
          WarehouseReport
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
