import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, PageSettingsModel, RowSelectingEventArgs, SaveEventArgs, SelectionSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { RequestService } from 'src/app/core/services/request.service';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { Department, Material, Request, RequestDetail } from 'src/app/core/model/db.model';
import { EmitType } from '@syncfusion/ej2-base';
import { DepartmentService } from 'src/app/core/services/department.service';
import { RequestDetailService } from 'src/app/core/services/requestdetail.service';
import { MaterialService } from 'src/app/core/services/material.service';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { D } from '@angular/cdk/keycodes';

  interface TempRes {
  MaterialId: number;
  MaterialName: string;
  CategoryId: number; 
  Material: Material;
}


@Component({
  selector: 'app-requirement',
  standalone : false,
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.scss']
})
export class RequirementComponent implements OnInit {
  public listRequest: Request[] = [];
  public pageSettings?: PageSettingsModel;
  public editSettings?: EditSettingsModel;
  public editSettings2?: EditSettingsModel;
  public temRequest : TempRes[]=[];

  public listStatus = [
    {Name:'Chờ xử lý', Id: 'PENDING'},
    {Name: 'Đang xử lý', Id: 'REJECTED'},
    {Name: 'Đã xử lý', Id: 'COMPLETED'}
  ]
  public field = { text: 'Name', value: 'Id' };
  public fieldMaterial = { text: 'MaterialName', value: 'MaterialId' };

  public toolbarOptions: ToolbarItems[] = ['Add', 'Edit','Delete'];
  public selectedRequest = new Request();
  public isDialogVisible : boolean = false;
  public requestDetail: RequestDetail[]=[];
  public fields: object = { text: 'DepartmentName', value: 'DepartmentId' };
  @ViewChild('dialog') dialog: DialogComponent | any;
  public hideDialog: EmitType<object> = () => {
    this.dialog.hide();
  };
  @ViewChild('container', { read: ElementRef, static: true }) container:
  | ElementRef
  | any;
  public targetElement: HTMLElement;
    public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  };
  @ViewChild('ddlelement')
  public dropDownListObject?: DropDownListComponent;
  @ViewChild('ddlelement1')
  public dropDownListObject1?: DropDownListComponent;
  @ViewChild('ddlelement2')
  public dropDownListObject2?: DropDownListComponent;
  public listMaterial : Material[]=[];
  public detailRequest = new RequestDetail();
  public listDepartment : Department[] = [];
  public selectionOptions?: SelectionSettingsModel;
  constructor(private service: RequestService,
    private serviceDepart : DepartmentService,
    private serviceDetail : RequestDetailService,
    private serviceMaterial : MaterialService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.pageSettings = { pageSize: 10 };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.editSettings2 = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode:'Dialog'
    };
    this.onGetData();
  }

  onGetData() {
    this.service.getAllRequest().subscribe((data) => {
      this.listRequest = data.value;
    });
    this.serviceDepart.getAllDepartment().subscribe((data) => {
      this.listDepartment = data.value;
    });
    this.serviceMaterial.getAllMaterial().subscribe((data)=>{
      this.listMaterial = data.value;
    })
  }
  recordClick(args: any){
    console.log("args",args);
    this.serviceDetail.getAllRequestDetailByIdRequest(args.rowData.RequestId).subscribe((data) => {
      this.requestDetail = data.value
    }) 
    
   }
  actionBegin(args: any) {
    console.log("args",args);
    if (args.requestType === 'add') {

      this.selectedRequest = new Request();
      this.selectedRequest.RequestDate = new Date();
      this.selectedRequest.Status = 'PENDING';
      this.detailRequest = new RequestDetail();
      this.requestDetail = [];
      this.dialog.show();
    }
   
    if (args.requestType === 'beginEdit') {
      this.selectedRequest = args.rowData as Request; 
      this.serviceDetail.getAllRequestDetailByIdRequest(this.selectedRequest.RequestId).subscribe((data) => {
        this.requestDetail = data.value
      })
      this.dialog.show(); 
    
    }
    if (args.action === 'add' && args.requestType === 'save') {
      this.selectedRequest = new Request();
    }
    if (args.action === 'edit' && args.requestType === 'save') {
    
    }
  }
  onInputChange(value: any) {
    const key = value.key;
    const event = value.value;
    const data = { ...this.selectedRequest, [key]: event };
    this.selectedRequest = data;
  }
  onInputChangeMaterial(value: any) {
    const key = value.key;
    const event = value.value;
    const data = { ...this.detailRequest, [key]: event };
    this.detailRequest = data;

  }
 actionBeginMaterial(args : SaveEventArgs){
  if (args.action === 'add' && args.requestType === 'save') {
    this.detailRequest.RequestId = this.selectedRequest.RequestId;

    this.serviceDetail.CreateRequestDetail(this.detailRequest).subscribe((data)=>{
      this.serviceDetail.getAllRequestDetailByIdRequest(this.selectedRequest.RequestId).subscribe((data) => {
        this.requestDetail = data.value
      })
      this.onGetData();
    })
  }
  if(args.requestType ==='beginEdit'){
    this.detailRequest = args.rowData as RequestDetail;
  }
  if(args.action === 'edit' && args.requestType === 'save'){
    console.log(this.detailRequest);
    let formData = {
      RequestDetailId : this.detailRequest.RequestDetailId,
      Quantity : this.detailRequest.Quantity,
      MaterialId : this.detailRequest.MaterialId,
      MaterialText : this.detailRequest.MaterialText,
      Measure : this.detailRequest.Measure,
      RequestId : this.detailRequest.RequestId,
      Note : this.detailRequest.Note,
    }
    this.serviceDetail.UpdateRequestDetail(formData,this.detailRequest.RequestDetailId).subscribe((data)=>{
      this.serviceDetail.getAllRequestDetailByIdRequest(this.selectedRequest.RequestId).subscribe((data) => {
        this.requestDetail = data.value
      })
      this.onGetData();
    })
  }
  if(args.requestType ==='delete'){
    let requestDetail = args.data as RequestDetail[];
    this.serviceDetail.DeleteRequestDetail(requestDetail[0].RequestDetailId).subscribe((data)=>{
      this.serviceDetail.getAllRequestDetailByIdRequest(this.selectedRequest.RequestId).subscribe((data) => {
        alert('Xóa thành công !');
        this.requestDetail = data.value;
      })
      this.onGetData();
    })
  }
 }
 onCancel() {
  this.onGetData();
  this.selectedRequest = new Request();        
  this.detailRequest = new RequestDetail();   
  this.requestDetail = [];  
  (this.dropDownListObject as any).value = null;       
  (this.dropDownListObject1 as any).value = null;      
  (this.dropDownListObject2 as any).value = null;         
  this.cdr.detectChanges();
  this.dialog.hide();                     
}

  actionComplete(args: any) {}

  onSave(){
    if(!this.selectedRequest.RequestId){
      this.selectedRequest.RequestType = 'MUA_HANG';
      this.selectedRequest.CreatedBy = 1 ;
      this.service.CreateRequest(this.selectedRequest).subscribe((data)=>{
        alert('Success');
        this.onGetData();
        this.dialog.hide();
      },(err)=>{
        alert('Failed');
      })
    }
    else{
      this.selectedRequest.RequestType = 'MUA_HANG';
      this.selectedRequest.CreatedBy = 1;
      let formData = {
        RequestId : this.selectedRequest.RequestId,
        RequestDate : this.selectedRequest.RequestDate,
        Status : this.selectedRequest.Status,
        DepartmentId : this.selectedRequest.DepartmentId,
        Notes : this.selectedRequest.Notes,
        DepartmentReceiveId : this.selectedRequest.DepartmentReceiveId,
        CreatedBy : this.selectedRequest.CreatedBy,
        RequestType : this.selectedRequest.RequestType
      }
      this.service.UpdateRequest(formData, this.selectedRequest.RequestId).subscribe((data) => {
        this.onGetData();
        this.dialog.hide();
      })
    }
  }
} 