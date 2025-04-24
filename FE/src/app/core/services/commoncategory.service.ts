import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { Commoncategory } from '../model/db.model';

@Injectable({
  providedIn: 'root',
})
export class CommoncategoryService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllCommoncategory(): Observable<ODataResponse> {
    let url = '/Commoncategories?$expand=Parent&$Orderby=Id DESC';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Commoncategory> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Commoncategory
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getCommoncategoryById(Id: any): Observable<ODataResponse> {
    let url = `/Commoncategories?$filter=Id eq ${Id}&$expand=Parent
&$expand=InverseParent
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Commoncategory> = this.jsonConvert.deserializeArray(
          odateRes.value,
          Commoncategory
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateCommoncategory(formData: any): Observable<Commoncategory> {
    let url = `/Commoncategories`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateCommoncategory(formData: any, Id: any): Observable<Commoncategory> {
    let url = `/Commoncategories`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteCommoncategory(id: any): Observable<Commoncategory> {
    return super.deleteEntity('/Commoncategories', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getCommoncategoryByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/Commoncategories?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Commoncategory> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Commoncategory
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
