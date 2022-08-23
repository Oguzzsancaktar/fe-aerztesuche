import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import IDoctorTaetigkeitsBereiche from '../../models/doctor/IDoctorTaetigkeitsBereiche';

@Component({
  selector: 'app-activity-area-list',
  templateUrl: './activity-area-list.component.html',
  styleUrls: ['./activity-area-list.component.scss'],
})
export class ActivityAreaListComponent implements OnInit {
  @Input() activtyAreaList?: IDoctorTaetigkeitsBereiche[] = [];

  constructor() {}

  ngOnInit(): void {}
}
