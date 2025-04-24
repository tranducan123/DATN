import { Component, OnInit } from '@angular/core';
import { EditSettingsModel, PageSettingsModel, SaveEventArgs, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { Category } from 'src/app/core/model/db.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{
  public listCate : Category[]=[];
  public cateDetail : Category = new Category();
     public pageSettings?: PageSettingsModel;
      public editSettings?: EditSettingsModel;
      public toolbarOptions: ToolbarItems[] = ['Add', 'Edit','Delete'];
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
constructor(private service : CategoryService) {}
    onGetData(){
      this.service.getAllCategory().subscribe((data) => {
        this.listCate = data.value;
      })
    }
    actionBegin(args : any){
      if (args.action === 'add' && args.requestType === 'save') {
          // const detail = (args.data as Department);
          this.cateDetail.Type = 'CONSUMABLE';
          
          this.service
            .CreateCategory(this.cateDetail)
            .subscribe((data: Category) => {
              this.onGetData();
            });
        }
    
        if (args.action === 'edit' && args.requestType === 'save') {
          const detail = (args.data as Category);
          this.service
            .UpdateCategory(this.cateDetail, detail.CategoryId)
            .subscribe((data: Category) => {
              this.onGetData();
            });
        }
    
        if (args.requestType === 'delete') {
          const x = (args.data as Category[])[0].CategoryId;
          this.service
            .DeleteCategory(x)
            .subscribe((data: Category) => {
              this.onGetData();
            });
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
              : 'Thêm mới loại sản phẩm';
        }
      }
      onInputChange(value: any) {
        const key = value.key;
        const event = value.value;
        const data = { ...this.cateDetail, [key]: event };
        this.cateDetail = data;
      }
}
