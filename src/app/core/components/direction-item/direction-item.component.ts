import { selectDoctorDetailModalDoctorId } from './../../../store/selectors/doctor-detail-modal.selectors';
import { DoctorDetailModalService } from 'src/app/core/services/doctor-detail-modal.service';
import { IAppState } from 'src/app/store/state/app.state';
import { IDoctorDetailModalState } from 'src/app/core/models';
import { Component, Input, OnInit } from '@angular/core';
import IDoctorDetail from '../../models/doctor/IDoctorDetail';
import { Store, select } from '@ngrx/store';
import { OpenDoctorDetailModal } from 'src/app/store/actions/doctor-detail-modal.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-direction-item',
  templateUrl: './direction-item.component.html',
  styleUrls: ['./direction-item.component.scss'],
})
export class DirectionItemComponent implements OnInit {
  @Input() map: any;
  @Input() doctor?: IDoctorDetail | null;
  @Input() isForModal: boolean = false;

  selectedDoctorId$: Observable<IDoctorDetailModalState['selectedDoctorId']> =
    this._store.pipe(select(selectDoctorDetailModalDoctorId));

  constructor(
    private _doctorDetailModalService: DoctorDetailModalService,
    public _store: Store<IAppState>
  ) {}

  openDoctorDetailModal(id: number) {
    if (!this.isForModal) {
      this._doctorDetailModalService.openDoctorDetailModal(
        id,
        this.map,
        this.doctor?.geometry.coordinates[1]!,
        this.doctor?.geometry.coordinates[0]!
      );
    }
  }

  ngOnInit(): void {}
}
