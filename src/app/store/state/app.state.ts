import {
  IDoctorDetailModalState,
  ISearchPlaceQuery,
} from 'src/app/core/models';

import { initialDoctorDetailModalState } from './doctor-detail-modal.state';
import { initialPlaceQueryParamsState } from './place-query-params.state';

export interface IAppState {
  doctorDetailModalState: IDoctorDetailModalState;
  placeQueryParamsState: ISearchPlaceQuery;
}

export const initialAppState: IAppState = {
  doctorDetailModalState: initialDoctorDetailModalState,
  placeQueryParamsState: initialPlaceQueryParamsState,
};

export function getAppInitialState(): IAppState {
  return initialAppState;
}
