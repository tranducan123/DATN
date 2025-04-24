import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RequirementComponent } from './requirement.component';
import { GridAllModule, GroupService } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

const route : Routes = [
  {
    path: '',
    component:RequirementComponent
  }

]


@NgModule({
  declarations: [RequirementComponent],
  imports: [
    CommonModule,
    GridAllModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    DropDownListAllModule,
    DialogModule,
    RouterModule.forChild(route),
    DatePickerModule,
    TextBoxAllModule
  ],
  providers: [GroupService],
})
export class RequirementModule { }
