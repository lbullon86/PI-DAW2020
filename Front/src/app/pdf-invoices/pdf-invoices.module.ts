import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { PdfInvoicesComponent } from './pdf-invoices.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [PdfInvoicesComponent],
  imports: [
    CommonModule,MatTableModule,MatButtonModule,MatFormFieldModule,  FormsModule, MatGridListModule,MatInputModule,
  ]
})
export class PdfInvoicesModule { }
