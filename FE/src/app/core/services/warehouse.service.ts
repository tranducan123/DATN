import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { Warehouse } from '../model/db.model';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllWarehouse(): Observable<ODataResponse> {
    let url = '/Warehouses?$Orderby=WarehouseId DESC&$expand=Department,CreatedbyNavigation,KhoNavigation';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Warehouse> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Warehouse
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getWarehouseById(Id: any): Observable<ODataResponse> {
    let url = `/Warehouses?$filter=Id eq ${Id}&$expand=Department
&$expand=InventoryTransactions
&$expand=Materials
&$expand=WarehouseReports
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Warehouse> = this.jsonConvert.deserializeArray(
          odateRes.value,
          Warehouse
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateWarehouse(formData: any): Observable<Warehouse> {
    let url = `/Warehouses`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateWarehouse(formData: any, Id: any): Observable<Warehouse> {
    let url = `/Warehouses`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteWarehouse(id: any): Observable<Warehouse> {
    return super.deleteEntity('/Warehouses', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getWarehouseByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/Warehouses?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Warehouse> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Warehouse
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
