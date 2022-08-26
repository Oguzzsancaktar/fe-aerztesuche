import { selectDoctorDetailModalDoctorId } from '../../store/selectors/doctor-detail-modal.selectors';
import { DoctorDetailModalService } from 'src/app/services/doctor-detail-modal.service';
import { IAppState } from 'src/app/store/state/app.state';
import { IDoctorDetailModalState, IPlace } from 'src/app/models';
import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GenderUtil } from '../../utils/genderUtil';

@Component({
  selector: 'app-direction-item',
  templateUrl: './direction-item.component.html',
  styleUrls: ['./direction-item.component.scss'],
})
export class DirectionItemComponent {
  @Input() map: any;
  @Input() place?: IPlace | null;
  @Input() isForModal: boolean = false;

  selectedDoctorId$: Observable<IDoctorDetailModalState['selectedDoctorId']> =
    this._store.pipe(select(selectDoctorDetailModalDoctorId));

  constructor(
    private _doctorDetailModalService: DoctorDetailModalService,
    private _store: Store<IAppState>,
    private _genderUtil: GenderUtil
  ) {}

  findGender() {
    return this._genderUtil.findGenderAdditional(this.place?.geschlect || 0);
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
}
