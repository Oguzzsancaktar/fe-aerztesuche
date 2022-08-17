import { IDoctorDetail } from 'src/app/core/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-location-slider',
  templateUrl: './doctor-location-slider.component.html',
  styleUrls: ['./doctor-location-slider.component.scss'],
})
export class DoctorLocationSlider implements OnInit {
  @Input() doctorDetail: IDoctorDetail | undefined;
  activeSlideNumber: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log('doctorDetail', this.doctorDetail);
  }

  handleSlideChange(stepNumber: number) {
    this.activeSlideNumber = stepNumber;
  }
}
