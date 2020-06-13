import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScheduleComponent } from './schedule.component';
import { ActivityEntryModule } from '../activity-entry/activity-entry.module'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { ActivityEntryComponent } from '../activity-entry/activity-entry.component';
import { AddActivityEntryModule } from '../add-activity-entry/add-activity-entry.module';
import { UpdateScheduleComponent } from './modal-schedule/modal-schedule.component';
import { DefaultersComponent } from './defaulters/defaulters.component'
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { UpdateScheduleModule } from './update-schedule/update-schedule.module';



@NgModule({
  declarations: [ScheduleComponent,AddActivityComponent,UpdateScheduleComponent,DefaultersComponent],
  imports: [
    CommonModule,FlexLayoutModule,ActivityEntryModule,MatInputModule,MatFormFieldModule,
    MatGridListModule, MatSelectModule, FormsModule, MatButtonModule,AddActivityEntryModule,MatListModule,AppRoutingModule
  ],
  entryComponents:[AddActivityComponent,ActivityEntryComponent,UpdateScheduleComponent]


})
export class ScheduleModule { }
