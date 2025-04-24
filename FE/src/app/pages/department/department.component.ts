import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  EditSettingsModel,
  PageSettingsModel,
  SaveEventArgs,
  IEditCell,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Department } from 'src/app/core/model/db.model';
import { DepartmentService } from 'src/app/core/services/department.service';
import { ODataResponse } from 'src/app/core/model/odata-response.model';

@Component({
  selector: 'app-department',
  standalone: false,
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  public pageSettings?: PageSettingsModel;
  public editSettings?: EditSettingsModel;
  public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];

  public listDepartment: Department[] = [];
  public detailDepartment: Department = new Department();
    public validationDepartmentNameRules: Object;
  public validationRoleRules: Object;
  public validationCreatedAtRules: Object;
   public dataFields: Object = {text: 'Name', value: 'Id'};
  public documentType = [
    {text : 'Normal', value : 'NORMAL'},
    {text : 'Special', value : 'SPECIAL'},
  ]
  field = {
    text: 'text',
    value: 'value'
  }

  constructor(
    private departmentService: DepartmentService,
    public changeDetectorRef: ChangeDetectorRef,
    private spinnerService : NgxSpinnerService
  ) {
    this.validationCreatedAtRules = { required: true, regex: ['^(0?[1-9]|1[012])[\\/]([0-2]?[0-9]|3[01])[\\/]\\d{4}$', 'Invalid date'] }

  }
  public departDetail = new Department();
  ngOnInit(): void {
    this.onGetListDepartment();
    this.detailDepartment = new Department();
    this.pageSettings = { pageSize: 10 };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Dialog',
    };

  }

  onGetListDepartment() {
    this.departmentService.getAllDepartment().subscribe((data: any) => {
      this.listDepartment = data.value;
    });
  }
  onInputChange(value: any) {
    const key = value.key;
    const event = value.value;
    const data = { ...this.departDetail, [key]: event };
    this.departDetail = data;
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
          : 'Thêm mới phòng ban';
    }
  }

  actionBegin(args: SaveEventArgs) {
    console.log('actionBegin', args);

    if (args.action === 'add' && args.requestType === 'save') {
      let formData = {
        DepartmentName : this.departDetail.DepartmentName,
        Role : this.departDetail.Role
      }
    this.departDetail.CreatedAt = new Date();
      this.departmentService
        .CreateDepartment(formData)
        .subscribe((data: Department) => {
          this.onGetListDepartment();
        });
    }

    if (args.action === 'edit' && args.requestType === 'save') {
      const detail = (args.data as Department);
      let formData = {
        DepartmentName : this.departDetail.DepartmentName,
        Role : this.departDetail.Role
      }
      this.departmentService
        .UpdateDepartment(formData, detail.DepartmentId)
        .subscribe((data: Department) => {
          this.onGetListDepartment();
        });
    }

    if (args.requestType === 'delete') {
      const x = (args.data as Department[])[0].DepartmentId;
      this.departmentService
        .DeleteDepartment(x)
        .subscribe((data: Department) => {
          this.onGetListDepartment();
        });
    }
  }

}
