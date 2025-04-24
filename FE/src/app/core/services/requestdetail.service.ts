import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { RequestDetail } from '../model/db.model';

@Injectable({
  providedIn: 'root',
})
export class RequestDetailService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllRequestDetail(): Observable<ODataResponse> {
    let url = '/RequestDetails?$Orderby=Id DESC';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<RequestDetail> = this.jsonConvert.deserializeArray(
          odataRes.value,
          RequestDetail
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }
  getAllRequestDetailByIdRequest(id: any): Observable<ODataResponse> {
    let url = `/RequestDetails?$filter=RequestId eq ${id}&$expand=Material&$expand=Request($expand=department)`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<RequestDetail> = this.jsonConvert.deserializeArray(
          odataRes.value,
          RequestDetail
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getRequestDetailById(Id: any): Observable<ODataResponse> {
    let url = `/RequestDetails?$filter=Id eq ${Id}&$expand=Material&$expand=Request($expand=department)
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<RequestDetail> = this.jsonConvert.deserializeArray(
          odateRes.value,
          RequestDetail
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateRequestDetail(formData: any): Observable<RequestDetail> {
    let url = `/RequestDetails`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateRequestDetail(formData: any, Id: any): Observable<RequestDetail> {
    let url = `/RequestDetails`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteRequestDetail(id: any): Observable<RequestDetail> {
    return super.deleteEntity('/RequestDetails', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getRequestDetailByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/RequestDetails?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<RequestDetail> = this.jsonConvert.deserializeArray(
          odataRes.value,
          RequestDetail
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
