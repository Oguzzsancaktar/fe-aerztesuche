import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDoctorFremdsprachen } from '../../models';

@Component({
  selector: 'app-activity-area-list',
  templateUrl: './activity-area-list.component.html',
  styleUrls: ['./activity-area-list.component.scss'],
})
export class ActivityAreaListComponent implements OnInit {
  @Input() activtyAreaList?: IDoctorFremdsprachen[] = [];

  constructor() {}

  ngOnInit(): void {}
}
