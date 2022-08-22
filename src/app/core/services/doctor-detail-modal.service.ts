import { PlaceService } from './place.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as L from 'leaflet';
import { Subject } from 'rxjs';
import {
  CloseDoctorDetailModal,
  OpenDoctorDetailModal,
} from 'src/app/store/actions/doctor-detail-modal.actions';

import { IAppState } from 'src/app/store/state/app.state';
import { environment } from 'src/environments/environment';

const iconRetinaUrlBlue = 'assets/icon-material-location-on-blue.svg';
const iconRetinaUrlRed = 'assets/icon-material-location-on-red.svg';

const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

const iconUpdated = L.icon({
  iconRetinaUrl: iconRetinaUrlRed,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

@Injectable({
  providedIn: 'root',
})
export class DoctorDetailModalService {
  doctorList: Subject<any> = new Subject<any>();
  selectedDoctor: Subject<any> = new Subject<any>();
  isDoctorDetailModalOpen: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient,
    private _store: Store<IAppState>,
    private _placeService: PlaceService
  ) {}

  getDoctorDetailById(doctorId: number) {
    return this.http.get<any>(`${environment.baseUrl}/person/${doctorId}`, {
      observe: 'response',
    });
  }

  openDoctorDetailModal(
    doctorId: number,
    map: L.Map,
    lat: number,
    lon: number
  ) {
    this._store.dispatch(
      new OpenDoctorDetailModal({
        selectedDoctorId: doctorId,
        selectedDoctorPlace: this._placeService.findPlaceWithLonLat(lon, lat),
      })
    );
    console.log(
      'this._placeService.findPlaceWithLonLat(lon, lat)',
      this._placeService.findPlaceWithLonLat(lon, lat)
    );
    map.setView(new L.LatLng(lat, lon), 15, { animate: true });
    const marker = L.marker([lat, lon], {
      icon: iconUpdated,
    });

    map.eachLayer((layer: any) => {
      if (layer?.options?.icon?.options?.iconRetinaUrl === iconRetinaUrlRed) {
        map.removeLayer(layer);
      }
    });

    marker.addTo(map);
  }

  closeDoctorDetailModal(map: L.Map) {
    map.eachLayer((layer: any) => {
      if (layer?.options?.icon?.options?.iconRetinaUrl === iconRetinaUrlRed) {
        map.removeLayer(layer);
      }
    });
    this._store.dispatch(new CloseDoctorDetailModal());
  }
}
