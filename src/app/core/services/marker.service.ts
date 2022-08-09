import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { IAppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { OpenDoctorDetailModal } from '../../store/actions/doctor-detail-modal.actions';
import { DoctorDetailModalService } from './doctor-detail-modal.service';

@Injectable()
export class MarkerService {
  doctors: string = '/assets/data/doctor-addresses.geojson';

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
      for (const c of res.doctors) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]).on('click', () => {
          this._doctorDetailModalService.openDoctorDetailModal(
            c.id,
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
