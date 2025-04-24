import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhoComponent } from './kho.component';
import { RouterModule, Routes } from '@angular/router';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

const route : Routes = [
  {
    path: '',
    component: KhoComponent
  }
]


@NgModule({
  declarations: [KhoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    GridAllModule,
    DropDownListAllModule,
    TextBoxAllModule

  ]
})
export class KhoModule { }
