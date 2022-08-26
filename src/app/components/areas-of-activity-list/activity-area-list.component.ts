import { Component, Input } from '@angular/core';
import IDoctorTaetigkeitsBereiche from '../../models/entities/doctor/IDoctorTaetigkeitsBereiche';

@Component({
  selector: 'app-activity-area-list',
  templateUrl: './activity-area-list.component.html',
  styleUrls: ['./activity-area-list.component.scss'],
})
export class ActivityAreaListComponent {
  @Input() activtyAreaList?: IDoctorTaetigkeitsBereiche[] = [];
}
