import { IMapLoadingState } from 'src/app/models';
import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';

const selectAppState = (state: IAppState) => state.mapLoadingState;

export const selectMapState = createSelector(
  selectAppState,
  (state: IMapLoadingState) => state
);

export const selectIsMapLoading = createSelector(
  selectAppState,
  (state: IMapLoadingState) => state.isMapLoading
);

export const selectWillMapLoad = createSelector(
  selectAppState,
  (state: IMapLoadingState) => state.willMapLoad
);
