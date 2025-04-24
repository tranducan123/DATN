import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { Supplier } from '../model/db.model';

@Injectable({
  providedIn: 'root',
})
export class SupplierService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllSupplier(): Observable<ODataResponse> {
    let url = '/Suppliers?$Orderby=Id DESC';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Supplier> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Supplier
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getSupplierById(Id: any): Observable<ODataResponse> {
    let url = `/Suppliers?$filter=Id eq ${Id}&$expand=Orders
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Supplier> = this.jsonConvert.deserializeArray(
          odateRes.value,
          Supplier
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateSupplier(formData: any): Observable<Supplier> {
    let url = `/Suppliers`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateSupplier(formData: any, Id: any): Observable<Supplier> {
    let url = `/Suppliers`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteSupplier(id: any): Observable<Supplier> {
    return super.deleteEntity('/Suppliers', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getSupplierByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/Suppliers?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Supplier> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Supplier
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
