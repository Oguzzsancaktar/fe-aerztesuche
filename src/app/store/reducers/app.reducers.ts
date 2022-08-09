import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { openDoctorDetailModalReducer } from './doctor-detail-modal.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  doctorDetailModalState: openDoctorDetailModalReducer,
};
