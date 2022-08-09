import { IDoctorDetailModalState } from 'src/app/core/models';
import { EDoctorDetailModalActions } from './../actions/doctor-detail-modal.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { OpenDoctorDetailModal } from '../actions/doctor-detail-modal.actions';
import { IAppState } from '../state/app.state';
import { select, Store } from '@ngrx/store';
import { exhaustMap, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { DoctorDetailModalService } from 'src/app/core/services/doctor-detail-modal.service';
import { of } from 'rxjs';

@Injectable()
export class DoctorDetailModalEffects {
  // @Effect()
  // openDoctorDetailModal$ = this._actions$.pipe(
  //   ofType<OpenDoctorDetailModal>(
  //     EDoctorDetailModalActions.OPEN_DOCTOR_DETAIL_MODAL
  //   ),
  //   switchMap(async (action) => {
  //     console.log('action from effect', action);
  //     // await this._doctorDetailModalService.openDoctorDetailModal(
  //     //   action.payload
  //     // );
  //   })

  //   // switchMap((openDoctorDetailModal,index) => {
  //   //   console.log('openDoctorDetailModal', openDoctorDetailModal);
  //   //   return this._doctorDetailModalService.openDoctorDetailModal(1)
  //   // })
  // );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>,
    private _doctorDetailModalService: DoctorDetailModalService
  ) {}
}
