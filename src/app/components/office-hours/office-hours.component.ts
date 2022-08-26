import { Component, OnInit, Input } from '@angular/core';
import { ESpretchzeitArt, EDays } from 'src/app/models';
import IDoctorSprechzeiten from 'src/app/models/entities/doctor/IDoctorSprechzeiten';

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
  }

  capitalize(str: string) {
    return str.replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());
  }

  ngOnInit(): void {
    this.headerText = this.capitalize(
      ESpretchzeitArt[this.officeHoursData?.sprechzeitArt]
        .split('_')
        .join(' ')
        .toLocaleLowerCase()
    );
  }
}
