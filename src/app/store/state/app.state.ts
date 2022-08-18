import {
  IDoctorDetailModalState,
  ISearchPlaceQuery,
} from 'src/app/core/models';

import { initialDoctorDetailModalState } from './doctor-detail-modal.state';
import { initialPlaceQueryParamsState } from './place-query-params.state';

export interface IAppState {
  doctorDetailModalState: IDoctorDetailModalState;
  placeQueryParamsState: ISearchPlaceQuery;
  mapLoadingState: boolean;
}

export const initialAppState: IAppState = {
  doctorDetailModalState: initialDoctorDetailModalState,
  placeQueryParamsState: initialPlaceQueryParamsState,
  mapLoadingState: true,
};

export function getAppInitialState(): IAppState {
  return initialAppState;
}
