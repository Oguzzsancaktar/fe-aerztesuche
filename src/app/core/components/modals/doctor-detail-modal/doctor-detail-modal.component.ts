import { CloseDoctorDetailModal } from './../../../../store/actions/doctor-detail-modal.actions';
import { selectDoctorDetailModalIsOpen } from './../../../../store/selectors/doctor-detail-modal.selectors';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctorDetailModalState } from 'src/app/core/models';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-doctor-detail-modal',
  templateUrl: './doctor-detail-modal.component.html',
  styleUrls: ['./doctor-detail-modal.component.scss'],
})
export class DoctorDetailModalComponent implements OnInit {
  public isDoctorDetailModalOpen$: Observable<
    IDoctorDetailModalState['isModalOpen']
  >;

  constructor(private _store: Store<IAppState>) {
    this.isDoctorDetailModalOpen$ = this._store.pipe(
      select(selectDoctorDetailModalIsOpen)
    );
  }

  ngOnInit(): void {}

  close() {
    this._store.dispatch(new CloseDoctorDetailModal());
  }
}
