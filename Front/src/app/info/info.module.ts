import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {  MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { InfoComponent } from './info.component';



@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,MatTableModule,MatGridListModule,MatFormFieldModule, MatInputModule,FormsModule, MatButtonModule

  ]
})
export class InfoModule { }
