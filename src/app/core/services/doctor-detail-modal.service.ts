import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as L from 'leaflet';
import { map, Subject } from 'rxjs';
import { OpenDoctorDetailModal } from 'src/app/store/actions/doctor-detail-modal.actions';
import { IAppState } from 'src/app/store/state/app.state';
import IDirection from '../models/doctor/IDoctorDirection';

@Injectable({
  providedIn: 'root',
})
export class DoctorDetailModalService {
  doctors: string = '/assets/data/doctor-addresses.geojson';

  doctorList: Subject<any> = new Subject<any>();
  selectedDoctor: Subject<any> = new Subject<any>();
  isDoctorDetailModalOpen: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, private _store: Store<IAppState>) {
    this.http.get(this.doctors).subscribe((res: any) => {
      this.doctorList = res.doctors;
    });
  }

  getDoctorList() {
    return this.http.get<any>(this.doctors, { observe: 'response' }).pipe(
      map((item) => {
        return item;
      })
    );
  }

  findSelectedDoctor(doctorId: number) {
    this.http.get(this.doctors).subscribe((res: any) => {
      const direction: IDirection = res.doctors.find(
        (doctor: any) => doctor.id === doctorId
      );
      this.selectedDoctor.next(direction);
    });
  }

  openDoctorDetailModal(
    doctorId: number,
    map: L.Map,
    lat: number,
    lon: number
  ) {
    this._store.dispatch(new OpenDoctorDetailModal(doctorId));
    map.panTo(new L.LatLng(lat, lon));
  }

  closeDoctorDetailModal() {
    this.isDoctorDetailModalOpen.next(false);
  }
}
