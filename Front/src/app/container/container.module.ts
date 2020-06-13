import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderModule
  ]
})
export class ContainerModule { }
