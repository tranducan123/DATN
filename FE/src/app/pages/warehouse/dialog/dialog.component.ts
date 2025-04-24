import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { Department, Detail, User, Warehouse, WarehouseSource } from 'src/app/core/model/db.model';
import { DepartmentService } from 'src/app/core/services/department.service';
import { DetailService } from 'src/app/core/services/detail.service';
import { UserService } from 'src/app/core/services/user.service';
import { WarehouseService } from 'src/app/core/services/warehouse.service';
import { WarehouseSourceService } from 'src/app/core/services/warehousesource.service';
import { MaterialModule } from 'src/app/material.module';
@Component({
  selector: 'app-dialog',
  imports: [MaterialModule,
    MatDialogModule,
    TextBoxAllModule,
    DropDownListAllModule,
    DatePickerAllModule,
    GridAllModule,
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})

export class DialogComponent implements OnInit{
  public listDepartment : Department[]=[];
  public listStatus = [
    {Name:'Chờ xử lý', Id: 0},
    {Name: 'Đã xử lý', Id: 1},
  ];
  public listUser : User[] = []
  public listKho : WarehouseSource []=[];
  public field = { text: 'Name', value: 'Id' };
  public fieldDepart = { text: 'DepartmentName', value: 'DepartmentId' };
  public fieldKho = { text: 'WarehouseName', value: 'WarehouseId' };
  public fieldUser = { text: 'FullName', value: 'UserId' };
  public listDetail : Detail[] =[]

  wareHouseDetail: Warehouse = new Warehouse();
  constructor(private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private serviceDepart : DepartmentService,
    private khoService : WarehouseSourceService,
    private userService : UserService,
    private serviceWare : WarehouseService,
    private serviceDetail : DetailService
  ) { }
  ngOnInit(): void {
    this.wareHouseDetail = this.data?.wareHoue || new Warehouse(); 
      this.onGetData();
      if(this.wareHouseDetail.DepartmentId){
        this.khoService.getWarehouseSourceByQuery(`$filter=DepartmentId eq ${this.wareHouseDetail.DepartmentId}`).subscribe((data) => {
          this.listKho = data.value;
      });
      this.userService.getUserByQuery(`$filter=DepartmentId eq ${this.wareHouseDetail.DepartmentId}`).subscribe((data) => {
          this.listUser = data.value;
      })
      }
      if(this.wareHouseDetail.WarehouseId){
        this.serviceDetail.getDetailByQuery(`$filter=WarehouseId eq ${this.wareHouseDetail.WarehouseId}&$expand=Material,Warehouse`).subscribe((data) => {
          this.listDetail = data.value;
          console.log(this.listDetail);
      });
      }
  }
  onGetData(){
    this.serviceDepart.getAllDepartment().subscribe((data) => {
      this.listDepartment = data.value;
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onChange(Value: any){
    this.khoService.getWarehouseSourceByQuery(`$filter=DepartmentId eq ${Value}`).subscribe((data) => {
        this.listKho = data.value;
    });
    this.userService.getUserByQuery(`$filter=DepartmentId eq ${Value}`).subscribe((data) => {
        this.listUser = data.value;
    })
  }
  onInputChange(value: any) {
    const key = value.key;
    const event = value.value;
    const data = { ...this.wareHouseDetail, [key]: event };
    this.wareHouseDetail = data;
  }

  onSave(): void {
    console.log("wareHouseDetail sinmit",this.wareHouseDetail);
    this.wareHouseDetail.Location = " hihi";
    this.wareHouseDetail.WarehouseName = 'hahaha';
    this.serviceWare.CreateWarehouse(this.wareHouseDetail).subscribe((data) => {
      alert('Thành công!');
    this.dialogRef.close();
    },
    (error) => {
      alert('Có lỗi xảy ra!');
    });
  }

}
