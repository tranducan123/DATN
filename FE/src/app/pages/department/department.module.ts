import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditService, GridAllModule, GridModule, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropDownListModule, MultiSelectAllModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
const route : Routes =[
  {
    path: '',
    component: DepartmentComponent
  },
]


@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    GridAllModule,
    DropDownListModule,
    NgbModule,
    TextBoxAllModule,
    NgxSpinnerModule
  ],
  providers: [ToolbarService, EditService, PageService]
})
export class DepartmentModule { }
