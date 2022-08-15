import { selectDoctorDetailModalDoctorId } from './../../store/selectors/doctor-detail-modal.selectors';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { IAppState } from '../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { DoctorDetailModalService } from './doctor-detail-modal.service';
import { PlaceService } from './place.service';

@Injectable()
export class MarkerService {
  selectedDoctorId$ = this._store.pipe(select(selectDoctorDetailModalDoctorId));

  constructor(
    private http: HttpClient,
    private _store: Store<IAppState>,
    private _doctorDetailModalService: DoctorDetailModalService,
    private _placeService: PlaceService
  ) {}

  static scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  makeCapitalMarkers(map: L.Map): void {
    this._placeService.getPlaceList().subscribe((res: any) => {
      for (const doctor of res.body) {
        const lon = doctor.place.longitute;
        const lat = doctor.place.latitude;

        const marker = L.marker([lat, lon]);

        marker.on('click', (x) => {
          this._doctorDetailModalService.openDoctorDetailModal(
            doctor.id,
            map,
            lat,
            lon
          );

          this._placeService.findPlaceWithLonLat(lon, lat);
        });

        marker.addTo(map);
      }
    });
  }
}
