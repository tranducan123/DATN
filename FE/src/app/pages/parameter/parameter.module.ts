import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParameterComponent } from './parameter.component';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

const route : Routes = [
  {
    path: '',
    component:ParameterComponent
  }
]


@NgModule({
  declarations: [ParameterComponent],
  imports: [
    CommonModule,
    GridAllModule,
    DropDownListAllModule,
    TextBoxAllModule,
    RouterModule.forChild(route)
  ]
})
export class ParameterModule { }
