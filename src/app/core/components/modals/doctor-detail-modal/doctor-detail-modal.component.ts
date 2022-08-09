import { CloseDoctorDetailModal } from './../../../../store/actions/doctor-detail-modal.actions';
import { selectDoctorDetailModalIsOpen } from './../../../../store/selectors/doctor-detail-modal.selectors';
import { Store, select } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctorDetailModalState } from 'src/app/core/models';
import { IAppState } from 'src/app/store/state/app.state';
import { DoctorDetailModalService } from 'src/app/core/services/doctor-detail-modal.service';

@Component({
  selector: 'app-doctor-detail-modal',
  templateUrl: './doctor-detail-modal.component.html',
  styleUrls: ['./doctor-detail-modal.component.scss'],
})
export class DoctorDetailModalComponent implements OnInit {
  @Input() map: any;

  public isDoctorDetailModalOpen$: Observable<
    IDoctorDetailModalState['isModalOpen']
  >;

  constructor(
    private _store: Store<IAppState>,
    private _doctorDetailModalService: DoctorDetailModalService
  ) {
    this.isDoctorDetailModalOpen$ = this._store.pipe(
      select(selectDoctorDetailModalIsOpen)
    );
  }

  ngOnInit(): void {}

  close() {
    this._doctorDetailModalService.closeDoctorDetailModal(this.map);
  }
}
