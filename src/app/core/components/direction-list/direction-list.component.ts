import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import IDoctorDetail from '../../models/doctor/IDoctorDetail';
import { DoctorDetailModalService } from '../../services/doctor-detail-modal.service';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.scss'],
})
export class DirectionListComponent implements OnInit {
  @Input() map: any;
  public subscription_doctor_list$: IDoctorDetail[] = [];

  constructor(private _doctorDetailModalService: DoctorDetailModalService) {
    this._doctorDetailModalService.getDoctorList().subscribe((item) => {
      this.subscription_doctor_list$ = item.body.doctors;
    });
  }

  ngOnInit(): void {
    setInterval(() => {}, 1000);
  }
}
