import { selectDoctorDetailModalDoctorId } from '../../store/selectors/doctor-detail-modal.selectors';
import { DoctorDetailModalService } from 'src/app/services/doctor-detail-modal.service';
import { IAppState } from 'src/app/store/state/app.state';
import { IDoctorDetailModalState, IPlace } from 'src/app/models';
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
  @Input() place?: IPlace | null;
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
    console.log('place3452345', this.place);
  }

  openDoctorDetailModal(id: number) {
    if (!this.isForModal) {
      this._doctorDetailModalService.openDoctorDetailModal(
        id,
        this.map,
        this.place?.place.latitude!,
        this.place?.place.longitute!
      );
    }
  }

  ngOnInit(): void {}
}
