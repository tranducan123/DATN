import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ParameterGroupComponent} from './parameter-group.component'
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

const route : Routes = [
  {
  path :'',
  component : ParameterGroupComponent
  }
]

@NgModule({
  declarations: [ParameterGroupComponent],
  imports: [
    CommonModule,
    GridAllModule,
    TextBoxAllModule,
    RouterModule.forChild(route),
  ]
})
export class ParameterGroupModule { }
