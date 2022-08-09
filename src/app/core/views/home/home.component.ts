import { selectDoctorDetailModalState } from './../../../store/selectors/doctor-detail-modal.selectors';
import { IAppState } from './../../../store/state/app.state';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  doctorDetailModalState$ = this._store.pipe(
    select(selectDoctorDetailModalState)
  );
  constructor(private _store: Store<IAppState>) {}

  ngOnInit(): void {}
}
