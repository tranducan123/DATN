import { Component, OnInit } from '@angular/core';
import { EditSettingsModel, PageSettingsModel, SaveEventArgs, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { Commoncategory } from 'src/app/core/model/db.model';
import { CommoncategoryService } from 'src/app/core/services/commoncategory.service';

@Component({
  selector: 'app-parameter',
  standalone: false,
  templateUrl: './parameter.component.html',
  styleUrl: './parameter.component.scss'
})
export class ParameterComponent implements OnInit{
  public listParameter: Commoncategory[] = [];
  public listParent : Commoncategory[] = [];
    public pageSettings?: PageSettingsModel;
      public editSettings?: EditSettingsModel;
      public field= {text: 'Name', value: 'Id'}
      public cateDetail : Commoncategory = new Commoncategory()
      public toolbarOptions: ToolbarItems[] = ['Add', 'Edit'];
constructor(private service : CommoncategoryService) {}
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
    this.service.getAllCommoncategory().subscribe(res => {
      this.listParameter = res.value.filter((x: any) => x.Type == 1);
      this.listParent = res.value.filter((x: any) => x.Type == 0);
    });
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
          : 'Thêm mới tham số dùng chung';
    }
  }
  onInputChange(value: any) {
    const key = value.key;
    const event = value.value;
    const data = { ...this.cateDetail, [key]: event };
    this.cateDetail = data;
  }

actionBegin(args: SaveEventArgs) {
    console.log('actionBegin',
       args);

    if (args.action === 'add' && args.requestType === 'save') {
      this.cateDetail.Type = 1;

      this.service
        .CreateCommoncategory(this.cateDetail)
        .subscribe((data: Commoncategory) => {
          this.onGetData();
        });
    }

    if (args.action === 'edit' && args.requestType === 'save') {
      const detail = (args.data as Commoncategory);
      this.service
        .UpdateCommoncategory(this.cateDetail, detail.Id)
        .subscribe((data: Commoncategory) => {
          this.onGetData();
        });
    }

    if (args.requestType === 'delete') {
      const x = (args.data as Commoncategory[])[0].Id;
      this.service
        .DeleteCommoncategory(x)
        .subscribe((data: Commoncategory) => {
          this.onGetData();
        });
    }
  }

}
