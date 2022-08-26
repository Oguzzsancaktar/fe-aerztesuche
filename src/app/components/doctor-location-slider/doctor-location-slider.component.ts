import { IDoctorDetail } from 'src/app/models';
import { AfterViewInit, Component, Input } from '@angular/core';
import ITaetigkeiten from 'src/app/models/entities/doctor/IDoctorTaetigkeiten';
import IDoctorTaetigkeitAnLeistungsorten from 'src/app/models/entities/doctor/IDoctorTaetigkeitAnLeistungsorten';

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

  ngAfterViewInit(): void {
    this.taetigkeitenList = this.doctorDetail.taetigkeiten;
    for (let taetigkeiten of this.taetigkeitenList) {
      this.taetigkeitAnLeistungsortenList.push(
        ...taetigkeiten.taetigkeitAnLeistungsorten
      );
    }
  }

  handleSlideChange(stepNumber: number) {
    this.activeSlideNumber = stepNumber;
  }
}
