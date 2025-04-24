import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { Material } from '../model/db.model';

@Injectable({
  providedIn: 'root',
})
export class MaterialService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllMaterial(): Observable<ODataResponse> {
    let url = '/Materials?expand=Category,Department&$Orderby=MaterialId DESC';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Material> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Material
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getMaterialById(Id: any): Observable<ODataResponse> {
    let url = `/Materials?$filter=Id eq ${Id}&$expand=Category
&$expand=Warehouse
&$expand=InventoryTransactions
&$expand=OrderDetails
&$expand=RequestDetails
&$expand=WarehouseReports
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Material> = this.jsonConvert.deserializeArray(
          odateRes.value,
          Material
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateMaterial(formData: any): Observable<Material> {
    let url = `/Materials`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateMaterial(formData: any, Id: any): Observable<Material> {
    let url = `/Materials`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteMaterial(id: any): Observable<Material> {
    return super.deleteEntity('/Materials', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getMaterialByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/Materials?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<Material> = this.jsonConvert.deserializeArray(
          odataRes.value,
          Material
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
