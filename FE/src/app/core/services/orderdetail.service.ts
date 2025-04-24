import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ODataResponse } from '../model/odata-response.model';
import { OrderDetail } from '../model/db.model';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getAllOrderDetail(): Observable<ODataResponse> {
    let url = '/OrderDetails?$Orderby=Id DESC';
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),

      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<OrderDetail> = this.jsonConvert.deserializeArray(
          odataRes.value,
          OrderDetail
        );
        odataRes.value = value;

        return odataRes;
      })
    );
  }

  getOrderDetailById(Id: any): Observable<ODataResponse> {
    let url = `/OrderDetails?$filter=Id eq ${Id}&$expand=Material
&$expand=Order
`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<OrderDetail> = this.jsonConvert.deserializeArray(
          odateRes.value,
          OrderDetail
        );
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  CreateOrderDetail(formData: any): Observable<OrderDetail> {
    let url = `/OrderDetails`;
    return super.postEntity(url, formData).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        return res;
      })
    );
  }

  UpdateOrderDetail(formData: any, Id: any): Observable<OrderDetail> {
    let url = `/OrderDetails`;
  return super.patchEntity(url, Id, formData).pipe(
    catchError((err) => throwError(() => new Error(err))),
    map((res) => {
      return res;
    })
  );
  }

  DeleteOrderDetail(id: any): Observable<OrderDetail> {
    return super.deleteEntity('/OrderDetails', id).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  getOrderDetailByQuery(queryParams?: string): Observable<ODataResponse> {
    let url = `/OrderDetails?${queryParams}`;
    return super.get(url).pipe(
      catchError((err) => throwError(() => new Error(err))),
      map((res) => {
        const odataRes: ODataResponse = this.jsonConvert.deserializeObject(
          res,
          ODataResponse
        );
        let value: Array<OrderDetail> = this.jsonConvert.deserializeArray(
          odataRes.value,
          OrderDetail
        );
        odataRes.value = value;
        return odataRes;
      })
    );
  }
}
