import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ScheduleComponent, DataUpdate } from '../schedule.component';
import { Activity } from '../add-activity/activity-model';
import { DiarioService } from '../../diario/diario.service';
import { AddActivityComponent } from '../add-activity/add-activity.component';
import { UpdateClientComponent } from 'src/app/detail-client/update-client/update-client.component';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './modal-schedule.component.html',
  styleUrls: ['./modal-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit {

  activities =[];
  days =[]
  activity:Activity;
  hour:string;
  minutes:string;
  parameter = true;
  
  constructor(private serviceSchedule: DiarioService,
    @Inject(MAT_DIALOG_DATA) public data: DataUpdate,
    public dialogRef: MatDialogRef<ScheduleComponent>,
    public dialog: MatDialog
  ) {
    this.activity = new Activity();
    this.activity.id = data.id;
    this.activities =["Total Barre", "Reformer", "Individual", "Iniciacion", "Mat"]
    this.days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    this.hour;
    this.minutes;
  }

  ngOnInit(): void {

  }

  delete() {
    this.serviceSchedule.delete(this.activity.id).subscribe(activity => this.dialogRef.close())
  }

  async update() {
    this.parameter = false;
    this.hour = await this.activity.hour.split(":")[0];
  }
}
