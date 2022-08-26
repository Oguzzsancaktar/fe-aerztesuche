import { Component, Input } from '@angular/core';
import { IDoctorBarrierefreiheit } from '../../models';

@Component({
  selector: 'app-accessibility-list',
  templateUrl: './accessibility-list.component.html',
  styleUrls: ['./accessibility-list.component.scss'],
})
export class AccessibilityListComponent {
  @Input() accessibilityList?: IDoctorBarrierefreiheit[] = [];
}
