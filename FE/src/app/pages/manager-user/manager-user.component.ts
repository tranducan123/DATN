import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel, PageSettingsModel, SaveEventArgs, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { User } from 'src/app/core/model/db.model';
import { UserService } from 'src/app/core/services/user.service';
import { RequestTypeAction } from 'src/app/core/utils/constants';

@Component({
  selector: 'app-manager-user',
  standalone: false,
  templateUrl: './manager-user.component.html',
  styleUrl: './manager-user.component.scss'
})
export class ManagerUserComponent implements OnInit {
    public pageSettings?: PageSettingsModel;
    public editSettings?: EditSettingsModel;
    public toolbarOptions: ToolbarItems[] = ['Add', 'Edit'];
  public listUser : User[] = [];
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
constructor(private service : UserService,
  private router : Router,
) {}

onGetData(){
  this.service.getAllUser().subscribe((data) => {
    this.listUser = data.value;
    console.log(this.listUser);
  })
}
actionBegin(args : any){
  console.log("args action",args);
  if(args.requestType === RequestTypeAction.ADD){
    this.router.navigate(['/manager-users/add-user'])
  }
  if(args.requestType == RequestTypeAction.BEGINEDIT){
    this.router.navigate(['/manager-users/user-detail/'+args.rowData.UserId])

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
          ? 'Edit User'
          : 'Add new User';
    }
  }

}
