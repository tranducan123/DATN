import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { RouterModule, Routes } from '@angular/router';
import { EditService, GridAllModule, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

const route : Routes = [
  {
    path: '',
    component:MaterialComponent
  },
]


@NgModule({
  declarations: [MaterialComponent],
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
export class MaterialModule { }
