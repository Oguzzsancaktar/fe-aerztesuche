import {
  selectDoctorDetailModalDoctorId,
  selectDoctorDetailModalState,
} from './../../store/selectors/doctor-detail-modal.selectors';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { IAppState } from '../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { OpenDoctorDetailModal } from '../../store/actions/doctor-detail-modal.actions';
import { DoctorDetailModalService } from './doctor-detail-modal.service';

const iconRetinaUrlBlue = 'assets/icon-material-location-on-blue.svg';
const iconRetinaUrlRed = 'assets/icon-material-location-on-red.svg';

@Injectable()
export class MarkerService {
  doctors: string = '/assets/data/doctor-addresses.geojson';

  selectedDoctorId$ = this._store.pipe(select(selectDoctorDetailModalDoctorId));

  constructor(
    private http: HttpClient,
    private _store: Store<IAppState>,
    private _doctorDetailModalService: DoctorDetailModalService
  ) {}

  static scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.doctors).subscribe((res: any) => {
      for (const doctor of res.doctors) {
        const lon = doctor.geometry.coordinates[0];
        const lat = doctor.geometry.coordinates[1];

        const marker = L.marker([lat, lon]);

        marker.on('click', (x) => {
          this._doctorDetailModalService.openDoctorDetailModal(
            doctor.id,
            map,
            lat,
            lon
          );
        });

        marker.addTo(map);
      }
    });
  }
}
