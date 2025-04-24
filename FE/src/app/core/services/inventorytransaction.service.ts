import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { InventoryTransaction } from '../model/db.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryTransactionService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllInventoryTransaction(): Observable<ODataResponse> {
    let url = '/InventoryTransactions?$Orderby=Id DESC';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<InventoryTransaction> = this.jsonConvert.deserializeArray(
          odataRes.value,
          InventoryTransaction
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getInventoryTransactionById(Id: any): Observable<ODataResponse> {
    let url = `/InventoryTransactions?$filter=Id eq ${Id}&$expand=Material
&$expand=RelatedRequest
&$expand=Warehouse
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<InventoryTransaction> = this.jsonConvert.deserializeArray(
          odateRes.value,
          InventoryTransaction
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateInventoryTransaction(formData: any): Observable<InventoryTransaction> {
    let url = `/InventoryTransactions`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateInventoryTransaction(formData: any, Id: any): Observable<InventoryTransaction> {
    let url = `/InventoryTransactions`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteInventoryTransaction(id: any): Observable<InventoryTransaction> {
    return super.deleteEntity('/InventoryTransactions', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getInventoryTransactionByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/InventoryTransactions?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<InventoryTransaction> = this.jsonConvert.deserializeArray(
          odataRes.value,
          InventoryTransaction
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
