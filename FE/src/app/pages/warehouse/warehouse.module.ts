import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseComponent } from './warehouse.component';
import { MaterialModule } from 'src/app/material.module';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

const route : Routes = [
  {
    path: '',
    component: WarehouseComponent
  }
]

@NgModule({
  declarations: [WarehouseComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(route)
  ]
})
export class WarehouseModule { }
