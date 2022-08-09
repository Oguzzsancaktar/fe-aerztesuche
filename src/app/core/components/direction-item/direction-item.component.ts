import { DoctorDetailModalService } from 'src/app/core/services/doctor-detail-modal.service';
import { IAppState } from 'src/app/store/state/app.state';
import { IDoctorDetailModalState } from 'src/app/core/models';
import { Component, Input, OnInit } from '@angular/core';
import IDoctorDetail from '../../models/doctor/IDoctorDetail';
import { Store } from '@ngrx/store';
import { OpenDoctorDetailModal } from 'src/app/store/actions/doctor-detail-modal.actions';

@Component({
  selector: 'app-direction-item',
  templateUrl: './direction-item.component.html',
  styleUrls: ['./direction-item.component.scss'],
})
export class DirectionItemComponent implements OnInit {
  @Input() doctor?: IDoctorDetail | null;

  constructor(private _doctorDetailModalService: DoctorDetailModalService) {}

  openDoctorDetailModal(id: number) {
    // this._doctorDetailModalService.openDoctorDetailModal(id, ,this.doctor?.geometry.coordinates[0],this.doctor?.geometry.coordinates[1]);
  }

  ngOnInit(): void {}
}
