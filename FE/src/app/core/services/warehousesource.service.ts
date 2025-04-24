import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { WarehouseSource } from '../model/db.model';

@Injectable({
  providedIn: 'root',
})
export class WarehouseSourceService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllWarehouseSource(): Observable<ODataResponse> {
    let url = '/kho?$Orderby=WarehouseId DESC&$expand=Department,CreatedByNavigation';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<WarehouseSource> = this.jsonConvert.deserializeArray(
          odataRes.value,
          WarehouseSource
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getWarehouseSourceById(Id: any): Observable<ODataResponse> {
    let url = `/Kho?$filter=Id eq ${Id}&$expand=Department
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<WarehouseSource> = this.jsonConvert.deserializeArray(
          odateRes.value,
          WarehouseSource
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateWarehouseSource(formData: any): Observable<WarehouseSource> {
    let url = `/Kho`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateWarehouseSource(formData: any, Id: any): Observable<WarehouseSource> {
    let url = `/Kho`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteWarehouseSource(id: any): Observable<WarehouseSource> {
    return super.deleteEntity('/Kho', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getWarehouseSourceByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/Kho?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<WarehouseSource> = this.jsonConvert.deserializeArray(
          odataRes.value,
          WarehouseSource
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
