import { Component, Input, OnInit } from '@angular/core';
import IDoctorSprechzeiten from '../../models/doctor/IDoctorSprechzeiten';
import { EDays } from '../../models/Enumeration/EDays';
import { ESpretchzeitArt } from '../../models/Enumeration/ESprechzeitArt';

@Component({
  selector: 'app-office-hours',
  templateUrl: './office-hours.component.html',
  styleUrls: ['./office-hours.component.scss'],
})
export class OfficeHoursComponent implements OnInit {
  @Input() officeHoursData!: IDoctorSprechzeiten;
  headerText: string = ESpretchzeitArt[this.officeHoursData?.sprechzeitArt];

  daysArr = EDays;

  constructor() {
    this.headerText = ESpretchzeitArt[this.officeHoursData?.sprechzeitArt];

    console.log(
      this.headerText,
      ESpretchzeitArt[this.officeHoursData?.sprechzeitArt],
      this.officeHoursData?.sprechzeitArt
    );
  }

  ngOnInit(): void {
    this.headerText = ESpretchzeitArt[this.officeHoursData?.sprechzeitArt]
      .split('_')
      .join(' ');
  }
}
