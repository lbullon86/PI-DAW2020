import { Component, OnInit, Input } from "@angular/core";
import { Activity } from '../schedule/add-activity/activity-model';

@Component({
  selector: "app-activity-entry",
  templateUrl: "./activity-entry.component.html",
  styleUrls: ["./activity-entry.component.css"]
})
export class ActivityEntryComponent implements OnInit {
  @Input() activity: Activity;
  hour:string;
  minutes:string;
  constructor() {}

  ngOnInit(): void {
    this.hour = this.activity.hour.split(":")[0]
    this.minutes = this.activity.hour.split(":")[1]

  }
}
