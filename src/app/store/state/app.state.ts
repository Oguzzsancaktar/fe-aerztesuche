import { IDoctorDetailModalState, ISearchPlaceQuery } from 'src/app/models';
import IMapLoadingState from 'src/app/models/entities/map/IMapLoadingState';

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
