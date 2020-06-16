import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from '../app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,MatOptionModule,MatFormFieldModule,MatSelectModule,AppRoutingModule,MatTabsModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
