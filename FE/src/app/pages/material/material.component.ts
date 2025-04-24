import { Component, OnInit } from '@angular/core';
import {
  EditSettingsModel,
  PageSettingsModel,
  SaveEventArgs,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';
import { Category, Department, Material } from 'src/app/core/model/db.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { DepartmentService } from 'src/app/core/services/department.service';
import { MaterialService } from 'src/app/core/services/material.service';

@Component({
  selector: 'app-material',
  standalone: false,
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss',
})
export class MaterialComponent implements OnInit {
  public listMaterial: Material[] = [];
  public materialDetail: Material = new Material();
  public pageSettings?: PageSettingsModel;
  public editSettings?: EditSettingsModel;
  public listCategory : Category[]=[];
  public listDepartment : Department[]=[];
  public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
  field = {
    text: 'CategoryName',
    value: 'CategoryId'
  }
  fielddept = {
    text: 'DepartmentName',
    value: 'DepartmentId'
  }
  constructor(private service: MaterialService,
    private serviceCate : CategoryService,
    private serviceDepart : DepartmentService
  ) {}
  ngOnInit(): void {
    this.onGetData();
    this.pageSettings = { pageSize: 10 };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Dialog',
    };
  }
  onGetData() {
    this.service.getAllMaterial().subscribe((data) => {
      this.listMaterial = data.value;
    });
    this.serviceCate.getAllCategory().subscribe((data)=>{
      this.listCategory = data.value;
    })
    this.serviceDepart.getAllDepartment().subscribe((data)=>{
      this.listDepartment = data.value;
    })
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
          : 'Thêm mới loại danh mục';
    }
  }
  actionBegin(args: any) {
    if (args.action === 'add' && args.requestType === 'save') {

      this.service
        .CreateMaterial(this.materialDetail)
        .subscribe((data: Material) => {
          this.onGetData();
        });
    }

    if (args.action === 'edit' && args.requestType === 'save') {
      const detail = args.data as Material;
      this.service
        .UpdateMaterial(this.materialDetail, detail.MaterialId)
        .subscribe((data: Material) => {
          this.onGetData();
        });
    }

    if (args.requestType === 'delete') {
      const x = (args.data as Material[])[0].CategoryId;
      this.service.DeleteMaterial(x).subscribe((data: Material) => {
        this.onGetData();
      });
    }
  }
  onInputChange(value: any) {
    const key = value.key;
    let event = value.value;
    if(key == 'StockQuantity' || key == 'Price') {
      event = parseInt(event);
    }
    const data = { ...this.materialDetail, [key]: event };
    this.materialDetail = data;
  }
}
