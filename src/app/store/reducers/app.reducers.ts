import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { openDoctorDetailModalReducer } from './doctor-detail-modal.reducers';
import { placeQueryParamsReducer } from './place-query-params.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  placeQueryParamsState: placeQueryParamsReducer,
  doctorDetailModalState: openDoctorDetailModalReducer,
};
