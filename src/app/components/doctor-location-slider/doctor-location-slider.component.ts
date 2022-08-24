import { IDoctorDetail } from 'src/app/models';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import ITaetigkeiten from 'src/app/models/doctor/IDoctorTaetigkeiten';
import IDoctorTaetigkeitAnLeistungsorten from 'src/app/models/doctor/IDoctorTaetigkeitAnLeistungsorten';

@Component({
  selector: 'app-doctor-location-slider',
  templateUrl: './doctor-location-slider.component.html',
  styleUrls: ['./doctor-location-slider.component.scss'],
})
export class DoctorLocationSlider implements AfterViewInit {
  @Input() doctorDetail!: IDoctorDetail;
  activeSlideNumber: number = 0;

  taetigkeitenList: ITaetigkeiten[] = [];
  taetigkeitAnLeistungsortenList: IDoctorTaetigkeitAnLeistungsorten[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.taetigkeitenList = this.doctorDetail.taetigkeiten;
    for (let taetigkeiten of this.taetigkeitenList) {
      this.taetigkeitAnLeistungsortenList.push(
        ...taetigkeiten.taetigkeitAnLeistungsorten
      );
    }

    console.log(
      'this.taetigkeitAnLeistungsortenList',
      this.taetigkeitAnLeistungsortenList
    );

    console.log('taetigkeitenList', this.taetigkeitenList);
  }

  handleSlideChange(stepNumber: number) {
    this.activeSlideNumber = stepNumber;
  }
}
