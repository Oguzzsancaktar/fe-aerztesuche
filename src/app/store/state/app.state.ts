import {
  IDoctorDetailModalState,
  IMapLoadingState,
  ISearchPlaceQuery,
} from 'src/app/core/models';

import { initialDoctorDetailModalState } from './doctor-detail-modal.state';
import { initialMapLoadingState } from './map-loading.state';
import { initialPlaceQueryParamsState } from './place-query-params.state';

export interface IAppState {
  doctorDetailModalState: IDoctorDetailModalState;
  placeQueryParamsState: ISearchPlaceQuery;
  mapLoadingState: IMapLoadingState;
}

export const initialAppState: IAppState = {
  doctorDetailModalState: initialDoctorDetailModalState,
  placeQueryParamsState: initialPlaceQueryParamsState,
  mapLoadingState: initialMapLoadingState,
};

export function getAppInitialState(): IAppState {
  return initialAppState;
}
