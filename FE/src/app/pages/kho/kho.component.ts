import { Component, OnInit } from '@angular/core';
import { EditSettingsModel, PageSettingsModel, SaveEventArgs, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { Department, WarehouseSource } from 'src/app/core/model/db.model';
import { DepartmentService } from 'src/app/core/services/department.service';
import { WarehouseSourceService } from 'src/app/core/services/warehousesource.service';
import { UserLogged } from 'src/app/core/utils/userLogged';

@Component({
  selector: 'app-kho',
  standalone: false,
  templateUrl: './kho.component.html',
  styleUrl: './kho.component.scss'
})
export class KhoComponent implements OnInit{
    typeData = [
    { TypeID: 1, TypeName: 'Kho vật tư' },
    { TypeID: 2, TypeName: 'Kho tài sản' },
  ];

  // Dữ liệu cho dropdown Status
  statusData = [
    { StatusID: 1, StatusName: 'Hoạt động' },
    { StatusID: 2, StatusName: 'Ngưng hoạt động' },
  ];
  public listDepartment : Department[] = [];  
  // Các trường để liên kết với dropdown
  typeFields = { text: 'TypeName', value: 'TypeID' };
  statusFields = { text: 'StatusName', value: 'StatusID' };
  departmentFields = {text: 'DepartmentName', value: 'DepartmentId'}
  public pageSettings?: PageSettingsModel;
  public userLogged = new UserLogged();
    public editSettings?: EditSettingsModel;
    public khoDetail : WarehouseSource = new WarehouseSource();
    public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
  public listKho : WarehouseSource []=[];
  constructor(private service : WarehouseSourceService,
    private serviceDepart : DepartmentService
  ){}
  ngOnInit(): void {
    this.onGetData();
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      mode:'Dialog'
    }
  }
   actionComplete(args: SaveEventArgs) {
      if (
        (args as any).requestType === 'beginEdit' ||
        (args as any).requestType === 'add'
      ) {
        const dialog = (args as any).dialog;
        dialog.showCloseIcon = false;
        dialog.width = 550;
        dialog.header =
          (args as any).requestType === 'beginEdit'
            ? 'Chỉnh sửa'
            : 'Thêm mới kho';
      }
    }
  onInputChange(value: any) {
    const key = value.key;
    const event = value.value;
    const data = { ...this.khoDetail, [key]: event };
    this.khoDetail = data;
  }
  onGetData(){
    this.service.getAllWarehouseSource().subscribe((data)=>{
      this.listKho = data.value;
    });
      this.serviceDepart.getAllDepartment().subscribe((data)=>{
        this.listDepartment = data.value
      })
  }
   actionBegin(args: SaveEventArgs) {
      console.log('actionBegin', args);
    this.khoDetail.CreatedBy = this.userLogged.getCurrentUser().userId;
      if (args.action === 'add' && args.requestType === 'save') {
       this.service.CreateWarehouseSource(this.khoDetail).subscribe((data)=>{
         alert('Thành công!')
       })
      }
      if(args.requestType === 'beginEdit'){
        this.khoDetail = args.rowData as WarehouseSource;
      }
      if (args.action === 'edit' && args.requestType === 'save') {
        console.log(this.khoDetail);
        this.service.UpdateWarehouseSource(this.khoDetail,this.khoDetail.WarehouseId).subscribe((data)=>{
          alert('Thành công!')
        })
      }
    }
}
