import { Action } from '@ngrx/store';

export enum EDoctorDetailModalActions {
  OPEN_DOCTOR_DETAIL_MODAL = '[DoctorDetailModal] Open Doctor Detail Modal',
  CLOSE_DOCTOR_DETAIL_MODAL = '[DoctorDetailModal] Close Doctor Detail Modal',
}

export class OpenDoctorDetailModal implements Action {
  public readonly type = EDoctorDetailModalActions.OPEN_DOCTOR_DETAIL_MODAL;
  constructor(public payload: number) {
    console.log('open modal called');
  }
}

export class CloseDoctorDetailModal implements Action {
  public readonly type = EDoctorDetailModalActions.CLOSE_DOCTOR_DETAIL_MODAL;
}

export type DoctorDetailModalActions =
  | OpenDoctorDetailModal
  | CloseDoctorDetailModal;
