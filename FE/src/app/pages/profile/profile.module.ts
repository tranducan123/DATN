import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

const route : Routes = [
  {
    path: '',
    component: ProfileComponent
  }
]

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
 
    MaterialModule,
    FormsModule,
    RouterModule.forChild(route)
  ]
})
export class ProfileModule { }
