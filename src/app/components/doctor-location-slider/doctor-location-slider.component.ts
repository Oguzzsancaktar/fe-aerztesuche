import { IDoctorBarrierefreiheit, IDoctorDetail } from 'src/app/models';
import { AfterViewInit, Component, Input } from '@angular/core';
import ITaetigkeiten from 'src/app/models/entities/doctor/IDoctorTaetigkeiten';
import IDoctorTaetigkeitAnLeistungsorten from 'src/app/models/entities/doctor/IDoctorTaetigkeitAnLeistungsorten';
import IDoctorTaetigkeitsBereiche from 'src/app/models/entities/doctor/IDoctorTaetigkeitsBereiche';

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

  selectedTaetigkeitsBereiche: IDoctorTaetigkeitsBereiche[] = [];
  selectedAccesibilityList: IDoctorBarrierefreiheit[] = [];

  taetigkeitList: ITaetigkeiten[] = [];

  ngAfterViewInit(): void {
    this.taetigkeitenList = this.doctorDetail.taetigkeiten;
    for (let taetigkeiten of this.taetigkeitenList) {
      this.taetigkeitAnLeistungsortenList.push(
        ...taetigkeiten.taetigkeitAnLeistungsorten
      );

      this.taetigkeitList.push({ ...taetigkeiten });
    }

    this.selectedTaetigkeitsBereiche =
      this.taetigkeitList[this.activeSlideNumber].taetigkeitsBereiche;
  }

  handleSlideChange(stepNumber: number) {
    let tempAccesibilityArr: IDoctorBarrierefreiheit[] = [];

    this.activeSlideNumber = stepNumber;
    this.selectedTaetigkeitsBereiche =
      this.taetigkeitList[stepNumber].taetigkeitsBereiche;

    this.selectedAccesibilityList =
      this.taetigkeitList[
        stepNumber
      ].taetigkeitAnLeistungsorten[0].barrierefreiheit;

    console.log(
      this.selectedTaetigkeitsBereiche,
      this.selectedAccesibilityList
    );

    for (let sorten of this.taetigkeitList[stepNumber]
      .taetigkeitAnLeistungsorten) {
      tempAccesibilityArr.concat(sorten.barrierefreiheit);
    }

    this.selectedAccesibilityList = tempAccesibilityArr;

    // this.selectedAccesibilityList =
    //   this.taetigkeitList[stepNumber].taetigkeitAnLeistungsorten.;
  }
}
