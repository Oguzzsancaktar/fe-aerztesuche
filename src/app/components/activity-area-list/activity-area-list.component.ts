import { Component, Input } from '@angular/core';
import { IDoctorFremdsprachen } from '../../models';

@Component({
  selector: 'app-activity-area-list',
  templateUrl: './activity-area-list.component.html',
  styleUrls: ['./activity-area-list.component.scss'],
})
export class ActivityAreaListComponent {
  @Input() activtyAreaList?: IDoctorFremdsprachen[] = [];
}
