import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerUserComponent } from './manager-user.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { DropDownListModule, MultiSelectAllModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { EditService, GridAllModule, GridModule, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ToastrModule, ToastrService } from 'ngx-toastr';
const route : Routes = [
  {
    path: '',
    component:ManagerUserComponent
  },
    {
      path: 'user-detail/:id',
      component: UserDetailComponent,

    },
    {
      path: 'add-user',
      component: UserDetailComponent,

    },

]

@NgModule({
  declarations: [ManagerUserComponent,UserDetailComponent],
  imports: [
   CommonModule,
      RouterModule.forChild(route),
      GridAllModule,
      DropDownListModule,
      NgbModule,
      MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
      TextBoxAllModule,
  ToastrModule,
      NgxSpinnerModule,

    ],
    providers: [ToolbarService, EditService, PageService]
  })
export class ManagerUserModule { }
