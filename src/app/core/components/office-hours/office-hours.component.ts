import { Component, Input, OnInit } from '@angular/core';
import IDoctorTermine from '../../models/doctor/IDoctorTermine';

@Component({
  selector: 'app-office-hours',
  templateUrl: './office-hours.component.html',
  styleUrls: ['./office-hours.component.scss'],
})
export class OfficeHoursComponent implements OnInit {
  @Input() headerText?: string;
  @Input() contentData?: IDoctorTermine[];

  constructor() {}

  ngOnInit(): void {}
}
