import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';

const selectAppState = (state: IAppState) => state.mapLoadingState;

export const selectMapState = createSelector(
  selectAppState,
  (state: boolean) => state
);
