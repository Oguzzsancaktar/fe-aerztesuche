import { selectDoctorDetailModalDoctorId } from './../../../store/selectors/doctor-detail-modal.selectors';
import { DoctorDetailModalService } from 'src/app/core/services/doctor-detail-modal.service';
import { IAppState } from 'src/app/store/state/app.state';
import { IDoctorDetailModalState, IPlace } from 'src/app/core/models';
import { Component, Input, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import EGender from '../../models/Enumeration/EGender';

@Component({
  selector: 'app-direction-item',
  templateUrl: './direction-item.component.html',
  styleUrls: ['./direction-item.component.scss'],
})
export class DirectionItemComponent implements OnInit {
  @Input() map: any;
  @Input() doctor?: IPlace | null;
  @Input() isForModal: boolean = false;

  selectedDoctorId$: Observable<IDoctorDetailModalState['selectedDoctorId']> =
    this._store.pipe(select(selectDoctorDetailModalDoctorId));

  // TODO make it util
  findGenderAdditional(gender: number) {
    return EGender[gender];
  }

  constructor(
    private _doctorDetailModalService: DoctorDetailModalService,
    public _store: Store<IAppState>
  ) {
    console.log('doctor23452345', this.doctor);
  }

  openDoctorDetailModal(id: number) {
    if (!this.isForModal) {
      this._doctorDetailModalService.openDoctorDetailModal(
        id,
        this.map,
        this.doctor?.place.latitude!,
        this.doctor?.place.longitute!
      );
    }
  }

  ngOnInit(): void {}
}
