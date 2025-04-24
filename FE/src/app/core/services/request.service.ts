import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { Request } from '../model/db.model';

@Injectable({
  providedIn: 'root',
})
export class RequestService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllRequest(): Observable<ODataResponse> {
    let url = '/Requests?$expand=Department,DepartmentRating,DepartmentReceive&$Orderby=RequestId DESC';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Request> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Request
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getRequestById(Id: any): Observable<ODataResponse> {
    let url = `/Requests?$filter=Id eq ${Id}&$expand=ApprovedByNavigation
&$expand=CreatedByNavigation
&$expand=Department
&$expand=Order
&$expand=InventoryTransactions
&$expand=RequestDetails
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Request> = this.jsonConvert.deserializeArray(
          odateRes.value,
          Request
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateRequest(formData: any): Observable<Request> {
    let url = `/Requests`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateRequest(formData: any, Id: any): Observable<Request> {
    let url = `/Requests`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteRequest(id: any): Observable<Request> {
    return super.deleteEntity('/Requests', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getRequestByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/Requests?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Request> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Request
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
