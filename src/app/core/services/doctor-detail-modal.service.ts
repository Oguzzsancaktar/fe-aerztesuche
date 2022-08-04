import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import IDirection from '../models/IDirection';
import IDoctorDetail from '../models/IDoctorDetail';

@Injectable()
export class DoctorDetailModalService {
  doctors: string = '/assets/data/doctor-addresses.geojson';

  doctorList: Subject<any> = new Subject<any>();
  selectedDoctor: Subject<any> = new Subject<any>();
  isDoctorDetailModalOpen: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
    this.http.get(this.doctors).subscribe((res: any) => {
      this.doctorList = res.doctors;
    });
  }

  /**
   * Use to change user name
   * @data type: string
   */

  getDoctorList() {
    return this.http.get<any>(this.doctors).pipe(
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

  openDoctorDetailModal(doctorId: number) {
    this.isDoctorDetailModalOpen.next(true);
    this.findSelectedDoctor(doctorId);
  }

  closeDoctorDetailModal() {
    this.isDoctorDetailModalOpen.next(false);
  }
}
