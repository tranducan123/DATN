import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { Detail } from '../model/db.model';

@Injectable({
  providedIn: 'root',
})
export class DetailService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllDetail(): Observable<ODataResponse> {
    let url = '/Details?$Orderby=Id DESC';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Detail> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Detail
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getDetailById(Id: any): Observable<ODataResponse> {
    let url = `/Details?$filter=Id eq ${Id}&$expand=Material
&$expand=Warehouse
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Detail> = this.jsonConvert.deserializeArray(
          odateRes.value,
          Detail
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateDetail(formData: any): Observable<Detail> {
    let url = `/Details`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateDetail(formData: any, Id: any): Observable<Detail> {
    let url = `/Details`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteDetail(id: any): Observable<Detail> {
    return super.deleteEntity('/Details', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getDetailByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/Detail?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Detail> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Detail
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
